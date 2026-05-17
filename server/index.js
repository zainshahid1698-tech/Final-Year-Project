import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { db, init } from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.use(cors());
app.use(express.json());

await init();

// Health
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// Signup
app.post("/api/signup", async (req, res) => {
  const { name, email, password, accountType } = req.body;
  if (!email || !password) return res.status(400).json({ error: "email and password required" });

  await db.read();
  const exists = db.data.users.find((u) => u.email === email.toLowerCase());
  if (exists) return res.status(409).json({ error: "user already exists" });

  const hash = await bcrypt.hash(password, 8);
  const user = {
    id: Date.now().toString(),
    name: name || "",
    email: email.toLowerCase(),
    accountType: accountType || "Donor",
    passwordHash: hash,
    createdAt: new Date().toISOString(),
  };
  db.data.users.push(user);
  await db.write();

  const { passwordHash, ...safe } = user;
  res.status(201).json(safe);
});

// Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "email and password required" });

  await db.read();
  const user = db.data.users.find((u) => u.email === email.toLowerCase());
  if (!user) return res.status(401).json({ error: "invalid credentials" });

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.status(401).json({ error: "invalid credentials" });

  const { passwordHash, ...safe } = user;
  res.json(safe);
});

// List users (for dev only)
app.get("/api/users", async (req, res) => {
  await db.read();
  const safe = db.data.users.map(({ passwordHash, ...u }) => u);
  res.json(safe);
});

// Contact form email
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email, and message are required" });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(500).json({ error: "SMTP configuration is missing on the server. Create a .env file from .env.example and set SMTP_USER and SMTP_PASS." });
  }

  const mailOptions = {
    from: process.env.SMTP_USER,
    replyTo: email,
    to: "zainshahid1698@gmail.com",
    subject: subject || "Contact form submission from BloodBridge",
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br />")}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error("Contact email failed:", error);
    const message = error instanceof Error ? error.message : "Failed to send contact message";
    res.status(500).json({ error: `Failed to send contact message: ${message}` });
  }
});

// Customers CRUD (simple)
app.get("/api/customers", async (req, res) => {
  await db.read();
  res.json(db.data.customers || []);
});

app.post("/api/customers", async (req, res) => {
  const c = req.body;
  c.id = Date.now().toString();
  c.createdAt = new Date().toISOString();
  await db.read();
  db.data.customers.push(c);
  await db.write();
  res.status(201).json(c);
});

app.listen(PORT, () => console.log(`Local API server running on http://localhost:${PORT}`));
