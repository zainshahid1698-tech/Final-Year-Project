import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      setLoading(false);
      if (!res.ok) {
        toast({ title: "Sign in failed", description: data.error || "Check your credentials" });
        return;
      }
      toast({ title: "Signed in", description: `Welcome back, ${data.email || email}` });
      try {
        localStorage.setItem("user", JSON.stringify(data));
      } catch (e) {
        // ignore
      }
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      toast({ title: "Error", description: "Unable to contact server" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md glass border border-border/50 rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-2 text-foreground">Sign in to BloodBridge</h1>
        <p className="text-sm text-muted-foreground mb-6">Enter your credentials to continue.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </div>
        </form>

        <div className="mt-4 text-sm text-muted-foreground">
          Don’t have an account? <Link to="/" className="text-primary underline">Explore site</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
