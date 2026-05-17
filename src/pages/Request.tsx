import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Droplet, MapPin, Calendar, Clock, AlertTriangle, Hospital, User, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { addStoredRequest } from "@/lib/request-storage";
import { Helmet } from "react-helmet-async";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
const urgencyLevels = [
  { value: "critical", label: "Critical (Within 24 hours)", color: "bg-red-500" },
  { value: "urgent", label: "Urgent (Within 3 days)", color: "bg-amber-500" },
  { value: "normal", label: "Normal (Within a week)", color: "bg-blue-500" },
];

// Sample blood requests data
const bloodRequests = [
  { id: 1, patientName: "Zayn", bloodGroup: "O-", units: 3, hospital: "City General Hospital", location: "Multan, PK", urgency: "critical", requestDate: "2024-12-19", contactName: "Carlos Garcia", contactPhone: "+92 300 1234567" },
  { id: 2, patientName: "Ali", bloodGroup: "A+", units: 2, hospital: "St. Mary's Medical Center", location: "Pindi, PK", urgency: "urgent", requestDate: "2024-12-18", contactName: "Emma Brown", contactPhone: "+92 300 1234567" },
  { id: 3, patientName: "Shabana", bloodGroup: "B+", units: 1, hospital: "Memorial Hospital", location: "Sargodha, PK", urgency: "normal", requestDate: "2024-12-17", contactName: "Wei Lee", contactPhone: "+92 300 1234567" },
  { id: 4, patientName: "Mushtak", bloodGroup: "AB+", units: 4, hospital: "University Medical Center", location: "Islamabad, PK", urgency: "critical", requestDate: "2024-12-19", contactName: "Sarah Johnson", contactPhone: "+92 300 1234567" },
  { id: 5, patientName: "Rabia", bloodGroup: "O+", units: 2, hospital: "Regional Medical Center", location: "Karachi, PK", urgency: "urgent", requestDate: "2024-12-18", contactName: "Michael Davis", contactPhone: "+92 300 1234567" },
  { id: 6, patientName: "Hamza", bloodGroup: "A-", units: 1, hospital: "Children's Hospital", location: "Lahore, PK", urgency: "normal", requestDate: "2024-12-16", contactName: "Linda Wilson", contactPhone: "+92 300 1234567" },
  { id: 7, patientName: "Ahmad", bloodGroup: "B-", units: 2, hospital: "Heart & Vascular Institute", location: "Bahawalpur, PK", urgency: "critical", requestDate: "2024-12-19", contactName: "Jose Martinez", contactPhone: "+92 300 1234567" },
  { id: 8, patientName: "Taimoor", bloodGroup: "AB-", units: 1, hospital: "Cancer Treatment Center", location: "Gujranwala, PK", urgency: "urgent", requestDate: "2024-12-17", contactName: "Jessica Taylor", contactPhone: "+92 300 1234567" },
];

const Request = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filterBloodGroup, setFilterBloodGroup] = useState<string>("all");
  const [filterUrgency, setFilterUrgency] = useState<string>("all");
  const [formData, setFormData] = useState({
    patientName: "",
    bloodGroup: "",
    units: "",
    hospital: "",
    city: "",
    urgency: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    reason: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    addStoredRequest({
      name: formData.patientName,
      location: `${formData.hospital}, ${formData.city}`,
      contact: formData.contactPhone,
      requestType: "Receiver",
    });
    
    toast({
      title: "Request Submitted!",
      description: "Your blood request has been submitted. Matching donors will be notified immediately.",
    });
    
    setFormData({
      patientName: "",
      bloodGroup: "",
      units: "",
      hospital: "",
      city: "",
      urgency: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      reason: "",
    });
    setIsSubmitting(false);
  };

  const filteredRequests = bloodRequests.filter(req => {
    const bloodMatch = filterBloodGroup === "all" || req.bloodGroup === filterBloodGroup;
    const urgencyMatch = filterUrgency === "all" || req.urgency === filterUrgency;
    return bloodMatch && urgencyMatch;
  });

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case "critical":
        return <Badge className="bg-red-500/10 text-red-600 border-red-500/20"><AlertTriangle className="h-3 w-3 mr-1" />Critical</Badge>;
      case "urgent":
        return <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20"><Clock className="h-3 w-3 mr-1" />Urgent</Badge>;
      default:
        return <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20"><Clock className="h-3 w-3 mr-1" />Normal</Badge>;
    }
  };

  return (
    <>
      <Helmet>
        <title>Request Blood - BloodBridge</title>
        <meta name="description" content="Submit a blood request for yourself or a loved one. View current blood requests and connect with available donors." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-rose-soft via-background to-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mb-6">
                <Droplet className="h-4 w-4" />
                Request Blood
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Need <span className="text-primary">Blood</span>? We're Here to Help
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Submit your blood request and we'll connect you with compatible donors 
                in your area as quickly as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Request Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Droplet className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Blood Request Form</h2>
                    <p className="text-muted-foreground">Fill out the details for your blood request</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Patient Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Patient Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="patientName">Patient Name *</Label>
                        <Input
                          id="patientName"
                          placeholder="Patient's full name"
                          value={formData.patientName}
                          onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bloodGroup">Blood Group Required *</Label>
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
                        <Label htmlFor="units">Units Required *</Label>
                        <Input
                          id="units"
                          type="number"
                          min="1"
                          max="10"
                          placeholder="Number of units"
                          value={formData.units}
                          onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency Level *</Label>
                        <Select value={formData.urgency} onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            {urgencyLevels.map((level) => (
                              <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Hospital Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <Hospital className="h-4 w-4" />
                      Hospital Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="hospital">Hospital Name *</Label>
                        <Input
                          id="hospital"
                          placeholder="Hospital name"
                          value={formData.hospital}
                          onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Contact Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Person Name *</Label>
                        <Input
                          id="contactName"
                          placeholder="Your name"
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactPhone">Phone Number *</Label>
                        <Input
                          id="contactPhone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.contactPhone}
                          onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email Address</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Reason */}
                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Request (Optional)</Label>
                    <Textarea
                      id="reason"
                      placeholder="Please provide any additional details about the blood requirement..."
                      rows={3}
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    />
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-sm">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-amber-700 mb-1">Important Notice</p>
                        <p className="text-amber-600">For emergencies, please also contact your local blood bank and hospital blood services. BloodBridge is a supplementary service.</p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      "Submitting Request..."
                    ) : (
                      <>
                        <Droplet className="h-5 w-5" />
                        Submit Blood Request
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Blood Requests Table */}
        <section className="py-16 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                Current Requests
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Active Blood Requests
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                People in need of blood donations. If you're a matching donor, please consider helping.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-md">
                <Label className="text-sm font-medium whitespace-nowrap">Blood Group:</Label>
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
              <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-md">
                <Label className="text-sm font-medium whitespace-nowrap">Urgency:</Label>
                <Select value={filterUrgency} onValueChange={setFilterUrgency}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Table */}
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-foreground hover:bg-foreground">
                      <TableHead className="text-background font-semibold">Patient</TableHead>
                      <TableHead className="text-background font-semibold">Blood Group</TableHead>
                      <TableHead className="text-background font-semibold">Units</TableHead>
                      <TableHead className="text-background font-semibold">Hospital</TableHead>
                      <TableHead className="text-background font-semibold">Urgency</TableHead>
                      <TableHead className="text-background font-semibold">Request Date</TableHead>
                      <TableHead className="text-background font-semibold">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRequests.map((request) => (
                      <TableRow key={request.id} className="hover:bg-accent/50">
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                              <span className="text-sm font-bold text-blue-600">{request.patientName.charAt(0)}</span>
                            </div>
                            <div>
                              <p>{request.patientName}</p>
                              <p className="text-xs text-muted-foreground">{request.contactName}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 font-bold">
                            {request.bloodGroup}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="font-semibold">{request.units}</span> units
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="flex items-center gap-2">
                              <Hospital className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{request.hospital}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {request.location}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {getUrgencyBadge(request.urgency)}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {new Date(request.requestDate).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="default" size="sm" className="gap-2">
                            <Phone className="h-4 w-4" />
                            Help Now
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-6 text-sm">
              Showing {filteredRequests.length} of {bloodRequests.length} blood requests
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Request;
