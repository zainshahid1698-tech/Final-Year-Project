import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Phone, Calendar, Clock, CheckCircle, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { addStoredRequest } from "@/lib/request-storage";
import { Helmet } from "react-helmet-async";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

// Sample donor data
const availableDonors = [
  { id: 1, name: "Ali", bloodGroup: "O+", location: "Multan, PK", lastDonation: "2024-10-15", status: "available", phone: "+92 300 1234567" },
  { id: 2, name: "Sara", bloodGroup: "A+", location: "Lahore, PK", lastDonation: "2024-09-20", status: "available", phone: "+92 300 1234567" },
  { id: 3, name: "Fahad", bloodGroup: "B+", location: "Faislabad, PK", lastDonation: "2024-11-01", status: "available", phone: "+92 300 1234567" },
  { id: 4, name: "Taimoor", bloodGroup: "AB+", location: "Rawalpindi, PK", lastDonation: "2024-08-30", status: "available", phone: "+92 300 1234567" },
  { id: 5, name: "Ahmad", bloodGroup: "O-", location: "Karachi, PK", lastDonation: "2024-10-25", status: "available", phone: "+92 300 1234567" },
  { id: 6, name: "Hamza", bloodGroup: "A-", location: "Islamabad, PK", lastDonation: "2024-11-10", status: "busy", phone: "+92 300 1234567" },
  { id: 7, name: "Rehan", bloodGroup: "B-", location: "Faislabad, PK", lastDonation: "2024-09-05", status: "available", phone: "+92 300 1234567" },
  { id: 8, name: "Nouman", bloodGroup: "AB-", location: "Sargodha, PK", lastDonation: "2024-10-08", status: "available", phone: "+92 300 1234567" },
];

const Donate = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filterBloodGroup, setFilterBloodGroup] = useState<string>("all");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bloodGroup: "",
    age: "",
    weight: "",
    city: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    addStoredRequest({
      name: formData.fullName,
      location: formData.address ? `${formData.address}, ${formData.city}` : formData.city,
      contact: formData.phone,
      requestType: "Donor",
    });
    
    toast({
      title: "Registration Successful!",
      description: "Thank you for registering as a blood donor. You'll be notified when someone needs your blood type.",
    });
    
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      bloodGroup: "",
      age: "",
      weight: "",
      city: "",
      address: "",
    });
    setIsSubmitting(false);
  };

  const filteredDonors = filterBloodGroup === "all" 
    ? availableDonors 
    : availableDonors.filter(d => d.bloodGroup === filterBloodGroup);

  return (
    <>
      <Helmet>
        <title>Donate Blood - BloodBridge</title>
        <meta name="description" content="Register as a blood donor and help save lives. View available donors and become part of our life-saving community." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-rose-soft via-background to-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Heart className="h-4 w-4 fill-current" />
                Become a Donor
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Donate <span className="text-primary">Blood</span>, Save Lives
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your blood donation can save up to 3 lives. Register as a donor today 
                and be a hero in someone's life.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Donor Registration</h2>
                    <p className="text-muted-foreground">Fill out the form to register as a blood donor</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        placeholder="Your Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ali@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bloodGroup">Blood Group *</Label>
                      <Select value={formData.bloodGroup} onValueChange={(value) => setFormData({ ...formData, bloodGroup: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select blood group" />
                        </SelectTrigger>
                        <SelectContent>
                          {bloodGroups.map((group) => (
                            <SelectItem key={group} value={group}>{group}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        min="18"
                        max="65"
                        placeholder="25"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg) *</Label>
                      <Input
                        id="weight"
                        type="number"
                        min="50"
                        placeholder="70"
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        placeholder="Multan"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        placeholder="123 etc Colony"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="bg-accent/50 rounded-xl p-4 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-2">Eligibility Requirements:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Must be between 18-65 years old</li>
                      <li>Must weigh at least 50 kg (110 lbs)</li>
                      <li>Must be in good health</li>
                      <li>Must not have donated blood in the last 56 days</li>
                    </ul>
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      "Registering..."
                    ) : (
                      <>
                        <Heart className="h-5 w-5" />
                        Register as Donor
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Available Donors Table */}
        <section className="py-16 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                Donor Directory
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Available Blood Donors
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse our list of registered blood donors ready to help save lives.
              </p>
            </div>

            {/* Filter */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-md">
                <Label className="text-sm font-medium">Filter by Blood Group:</Label>
                <Select value={filterBloodGroup} onValueChange={setFilterBloodGroup}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {bloodGroups.map((group) => (
                      <SelectItem key={group} value={group}>{group}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Table */}
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-foreground hover:bg-foreground">
                    <TableHead className="text-background font-semibold">Donor Name</TableHead>
                    <TableHead className="text-background font-semibold">Blood Group</TableHead>
                    <TableHead className="text-background font-semibold">Location</TableHead>
                    <TableHead className="text-background font-semibold">Last Donation</TableHead>
                    <TableHead className="text-background font-semibold">Status</TableHead>
                    <TableHead className="text-background font-semibold">Contact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDonors.map((donor) => (
                    <TableRow key={donor.id} className="hover:bg-accent/50">
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-bold text-primary">{donor.name.charAt(0)}</span>
                          </div>
                          {donor.name}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 font-bold">
                          {donor.bloodGroup}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {donor.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {new Date(donor.lastDonation).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        {donor.status === "available" ? (
                          <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Available
                          </Badge>
                        ) : (
                          <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">
                            <Clock className="h-3 w-3 mr-1" />
                            Busy
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Phone className="h-4 w-4" />
                          Contact
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <p className="text-center text-muted-foreground mt-6 text-sm">
              Showing {filteredDonors.length} of {availableDonors.length} registered donors
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Donate;
