import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpRight, Upload, Users, HeartHandshake } from "lucide-react";
import { getStoredRequests, RequestRecord } from "@/lib/request-storage";

const UploadedRequests = () => {
  const [uploads, setUploads] = useState<RequestRecord[]>([]);

  useEffect(() => {
    setUploads(getStoredRequests());
  }, []);

  const totalUploads = uploads.length;
  const donorUploads = uploads.filter((upload) => upload.requestType === "Donor").length;
  const receiverUploads = uploads.filter((upload) => upload.requestType === "Receiver").length;

  return (
  <>
    <Helmet>
      <title>Requests - BloodBridge</title>
      <meta
        name="description"
        content="See total blood requests from donors and receivers on BloodBridge."
      />
    </Helmet>
    <Navbar />

    <main className="pt-28">
      <section className="bg-gradient-to-br from-rose-soft via-background to-warm-gray pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-600 text-sm font-semibold mb-4">
              <Upload className="h-4 w-4" /> Requests
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Requests Tracker
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Track how many blood requests have been submitted by donors and receivers on BloodBridge. This page helps you see the latest request totals in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 xl:grid-cols-3">
            <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Total Requests</p>
                  <h2 className="mt-3 text-5xl font-bold text-foreground">{totalUploads}</h2>
                </div>
                <div className="w-14 h-14 rounded-3xl bg-primary/10 text-primary grid place-items-center">
                  <ArrowUpRight className="h-6 w-6" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-6">
                Total blood requests uploaded by the community from both donors and receivers.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Donor Requests</p>
                  <h2 className="mt-3 text-5xl font-bold text-foreground">{donorUploads}</h2>
                </div>
                <div className="w-14 h-14 rounded-3xl bg-emerald-500/10 text-emerald-600 grid place-items-center">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-6">
                Requests uploaded by donors who are offering to give blood to patients in need.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Receiver Requests</p>
                  <h2 className="mt-3 text-5xl font-bold text-foreground">{receiverUploads}</h2>
                </div>
                <div className="w-14 h-14 rounded-3xl bg-sky-500/10 text-sky-600 grid place-items-center">
                  <HeartHandshake className="h-6 w-6" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-6">
                Requests uploaded by receivers who need blood support for themselves or loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">What this page shows</h2>
            <p className="text-base text-muted-foreground leading-7 mb-4">
              This page summarizes the total number of blood requests uploaded by donors and receivers. Use these totals to understand how active the community is and where demand is growing.
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                Total uploaded requests from the whole BloodBridge community.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Donor-uploaded requests for blood donations.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                Receiver-uploaded requests from patients and families seeking blood.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Requests</h2>
              <p className="text-base text-muted-foreground leading-7">
                This table shows name, location, contact number, and whether the request was uploaded by a donor or a receiver.
              </p>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Contact Number</TableHead>
                    <TableHead>Request Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {uploads.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground py-6">
                        No requests submitted yet. Counts will update when you request as a receiver or register as a donor.
                      </TableCell>
                    </TableRow>
                  ) : (
                    uploads.map((upload) => (
                      <TableRow key={upload.id} className="hover:bg-accent/50">
                        <TableCell>{upload.name}</TableCell>
                        <TableCell>{upload.location}</TableCell>
                        <TableCell>{upload.contact}</TableCell>
                        <TableCell>{upload.requestType}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </>
);
};

export default UploadedRequests;
