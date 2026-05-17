import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { User, Heart, Trash } from "lucide-react";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

type Donation = {
  id: string;
  date: string;
  units: number;
  note?: string;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ date: new Date().toISOString().slice(0, 10), units: 1, note: "" });

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (!raw) return navigate("/login");
    try {
      const u = JSON.parse(raw);
      setUser(u);
      setDonations(u.donations || []);
    } catch (e) {
      return navigate("/login");
    }
  }, []);

  const handleAdd = () => {
    const newDonation: Donation = { id: Date.now().toString(), date: form.date, units: Number(form.units), note: form.note };
    const updated = [newDonation, ...donations];
    setDonations(updated);
    const updatedUser = { ...(user || {}), donations: updated };
    setUser(updatedUser);
    try {
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (e) {}
    setForm({ date: new Date().toISOString().slice(0, 10), units: 1, note: "" });
    setShowAdd(false);
  };

  const handleSaveBloodType = (val: string) => {
    const updatedUser = { ...(user || {}), bloodGroup: val };
    setUser(updatedUser);
    try {
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (e) {}
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("user");
    } catch (e) {}
    navigate("/login");
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - BloodBridge</title>
      </Helmet>
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Welcome{user && user.name ? `, ${user.name}` : ""}</h1>
              <p className="text-sm text-muted-foreground">Your account dashboard</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => navigate('/request')}>View Requests</Button>
              <Button variant="destructive" onClick={handleLogout}>Logout</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4">Profile</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <div className="mt-1 text-foreground">{user?.name || user?.email || "—"}</div>
                </div>
                <div>
                  <Label>Email</Label>
                  <div className="mt-1 text-foreground">{user?.email || "—"}</div>
                </div>
                <div>
                  <Label>Account Type</Label>
                  <div className="mt-1 text-foreground">{user?.accountType || "—"}</div>
                </div>
                <div>
                  <Label>Registered</Label>
                  <div className="mt-1 text-foreground">{user?.createdAt ? new Date(user.createdAt).toLocaleString() : "—"}</div>
                </div>
                <div>
                  <Label>User ID</Label>
                  <div className="mt-1 text-foreground">{user?.id || "—"}</div>
                </div>
                <div>
                  <Label>Blood Type</Label>
                  <div className="mt-1">
                    <Select value={user?.bloodGroup || ""} onValueChange={(v) => handleSaveBloodType(v)}>
                      <SelectTrigger>
                        <SelectValue placeholder={user?.bloodGroup || "Not set"} />
                      </SelectTrigger>
                      <SelectContent>
                        {bloodGroups.map((g) => (
                          <SelectItem key={g} value={g}>{g}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Donations Done</h3>
                <div className="mb-3 text-sm text-muted-foreground">Total donations: {donations.length}</div>
                <div className="space-y-3">
                  {donations.length === 0 && <div className="text-sm text-muted-foreground">No donation records yet.</div>}
                  {donations.map((d) => (
                    <div key={d.id} className="flex items-center justify-between bg-background p-3 rounded-md border">
                      <div>
                        <div className="font-medium">{d.date} — {d.units} unit{d.units > 1 ? 's' : ''}</div>
                        {d.note && <div className="text-sm text-muted-foreground">{d.note}</div>}
                      </div>
                      <div>
                        <Button variant="ghost" size="sm" onClick={() => {
                          const updated = donations.filter(x => x.id !== d.id);
                          setDonations(updated);
                          const updatedUser = { ...(user || {}), donations: updated };
                          setUser(updatedUser);
                          try { localStorage.setItem('user', JSON.stringify(updatedUser)); } catch (e) {}
                        }}>
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {showAdd ? (
                  <div className="mt-4 space-y-3">
                    <div>
                      <Label>Date</Label>
                      <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                    </div>
                    <div>
                      <Label>Units</Label>
                      <Input type="number" min={1} value={form.units} onChange={(e) => setForm({ ...form, units: Number(e.target.value) })} />
                    </div>
                    <div>
                      <Label>Note (optional)</Label>
                      <Input value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleAdd}>Add Donation</Button>
                      <Button variant="ghost" onClick={() => setShowAdd(false)}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4">
                    <Button onClick={() => setShowAdd(true)}><Heart className="h-4 w-4 mr-2" /> Add Donation</Button>
                  </div>
                )}
              </div>
            </div>

            <aside className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{user?.name || user?.email}</div>
                  <div className="text-sm text-muted-foreground">{user?.accountType || "User"}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Blood Type</Label>
                  <div className="mt-1"><Badge>{user?.bloodGroup || 'Not set'}</Badge></div>
                </div>

                <div>
                  <Label>Requests for donors</Label>
                  <div className="mt-2 text-sm text-muted-foreground">View current requests and manage your responses.</div>
                  <div className="mt-3">
                    <Button onClick={() => navigate('/request')}>Open Requests</Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
