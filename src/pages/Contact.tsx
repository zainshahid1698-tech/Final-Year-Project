import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["115", "1122"],
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@bloodbridge.org", "info@bloodbridge.org"],
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["123 Life Avenue", "Health City, Multan 12345"],
    description: "Visit us anytime",
  },
  {
    icon: Clock,
    title: "Emergency Helpline",
    details: ["1122"],
    description: "24/7 Available",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload.error || "Failed to send message");
      }

      toast({
        title: "Message Sent!",
        description: "Your message has been sent to zainshahid1698@gmail.com.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to send the message.";
      const description = message.includes("SMTP configuration")
        ? "Email sending is not configured on the server. Please update the backend .env file with SMTP_USER and SMTP_PASS."
        : message;

      toast({
        title: "Send failed",
        description,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - BloodBridge</title>
        <meta name="description" content="Get in touch with BloodBridge. Reach out for support, partnership inquiries, or emergency blood requests. We're here to help 24/7." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-rose-soft via-background to-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                <MessageCircle className="h-4 w-4" />
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Contact <span className="text-primary">BloodBridge</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions? We're here to help. Reach out to our team and we'll 
                get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.details.map((detail, index) => (
                          <p key={index} className="text-foreground">{detail}</p>
                        ))}
                        <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 rounded-2xl bg-muted h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Map integration available</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Help Section */}
        <section className="py-20 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-8">Need Immediate Help?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Emergency Helpline</h3>
                  <p className="text-muted-foreground mb-4">For urgent blood requests, call our 24/7 helpline.</p>
                  <a href="tel:+1234567999" className="text-2xl font-bold text-primary hover:underline">
                    1122
                  </a>
                </div>
                
                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-4">Chat with our support team for quick assistance.</p>
                  <Button variant="outline">Start Live Chat</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
