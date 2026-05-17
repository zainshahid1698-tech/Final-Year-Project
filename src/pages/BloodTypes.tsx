import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { Droplet, ArrowRight, Check, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

const bloodTypes = [
  { 
    type: "A+", 
    canDonateTo: ["A+", "AB+"], 
    canReceiveFrom: ["A+", "A-", "O+", "O-"], 
    population: "35%",
    antigens: "A antigen",
    antibodies: "Anti-B"
  },
  { 
    type: "A-", 
    canDonateTo: ["A+", "A-", "AB+", "AB-"], 
    canReceiveFrom: ["A-", "O-"], 
    population: "6%",
    antigens: "A antigen",
    antibodies: "Anti-B"
  },
  { 
    type: "B+", 
    canDonateTo: ["B+", "AB+"], 
    canReceiveFrom: ["B+", "B-", "O+", "O-"], 
    population: "8%",
    antigens: "B antigen",
    antibodies: "Anti-A"
  },
  { 
    type: "B-", 
    canDonateTo: ["B+", "B-", "AB+", "AB-"], 
    canReceiveFrom: ["B-", "O-"], 
    population: "2%",
    antigens: "B antigen",
    antibodies: "Anti-A"
  },
  { 
    type: "O+", 
    canDonateTo: ["O+", "A+", "B+", "AB+"], 
    canReceiveFrom: ["O+", "O-"], 
    population: "38%",
    antigens: "None",
    antibodies: "Anti-A, Anti-B"
  },
  { 
    type: "O-", 
    canDonateTo: ["All Types"], 
    canReceiveFrom: ["O-"], 
    population: "7%",
    special: "Universal Donor",
    antigens: "None",
    antibodies: "Anti-A, Anti-B"
  },
  { 
    type: "AB+", 
    canDonateTo: ["AB+"], 
    canReceiveFrom: ["All Types"], 
    population: "3%",
    special: "Universal Receiver",
    antigens: "A and B antigens",
    antibodies: "None"
  },
  { 
    type: "AB-", 
    canDonateTo: ["AB+", "AB-"], 
    canReceiveFrom: ["A-", "B-", "O-", "AB-"], 
    population: "1%",
    antigens: "A and B antigens",
    antibodies: "None"
  },
];

const allTypes = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];

const compatibilityMatrix = bloodTypes.map(donor => ({
  type: donor.type,
  canDonateTo: allTypes.map(recipient => 
    donor.canDonateTo.includes("All Types") || donor.canDonateTo.includes(recipient)
  )
}));

const BloodTypes = () => {
  return (
    <>
      <Helmet>
        <title>Blood Type Compatibility Chart - BloodBridge</title>
        <meta name="description" content="Complete blood type compatibility chart. Learn about A, B, AB, O blood types, universal donors, and receivers. Essential information for blood donation." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-rose-soft via-background to-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                Blood Compatibility
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Blood Type{" "}
                <span className="text-primary">Compatibility</span> Chart
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Understanding blood type compatibility is essential for safe transfusions. 
                Learn which blood types are compatible with yours.
              </p>
            </div>
          </div>
        </section>

        {/* Blood Types Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bloodTypes.map((blood) => (
                <div
                  key={blood.type}
                  className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                >
                  {/* Special Badge */}
                  {blood.special && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full whitespace-nowrap">
                        {blood.special}
                      </span>
                    </div>
                  )}
                  
                  {/* Blood Type Header */}
                  <div className="text-center mb-6 pt-2">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                      <span className="text-3xl font-bold text-primary">{blood.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{blood.population} of population</p>
                  </div>
                  
                  {/* Scientific Info */}
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Antigens:</span>
                      <span className="text-foreground font-medium">{blood.antigens}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Antibodies:</span>
                      <span className="text-foreground font-medium">{blood.antibodies}</span>
                    </div>
                  </div>
                  
                  {/* Compatibility Info */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                        <ArrowRight className="h-3 w-3" />
                        Can donate to:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {blood.canDonateTo.map((type) => (
                          <span
                            key={type}
                            className="px-2 py-1 bg-green-500/10 text-green-600 rounded text-xs font-medium"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 rotate-180" />
                        Can receive from:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {blood.canReceiveFrom.map((type) => (
                          <span
                            key={type}
                            className="px-2 py-1 bg-blue-500/10 text-blue-600 rounded text-xs font-medium"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compatibility Matrix */}
        <section className="py-20 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                Full Matrix
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Complete Compatibility Matrix
              </h2>
              <p className="text-lg text-muted-foreground">
                This matrix shows which blood types can donate to which recipients.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-foreground text-background">
                    <th className="p-4 text-left font-semibold">
                      <div className="flex items-center gap-2">
                        <Droplet className="h-5 w-5" />
                        Donor → Recipient
                      </div>
                    </th>
                    {allTypes.map(type => (
                      <th key={type} className="p-4 text-center font-semibold">{type}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compatibilityMatrix.map((row, rowIndex) => (
                    <tr key={row.type} className={rowIndex % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <td className="p-4 font-semibold text-primary">{row.type}</td>
                      {row.canDonateTo.map((canDonate, colIndex) => (
                        <td key={colIndex} className="p-4 text-center">
                          {canDonate ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                              <Check className="h-5 w-5 text-green-600" />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10">
                              <X className="h-5 w-5 text-red-400" />
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Key Facts About Blood Types
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                  <h3 className="text-xl font-bold text-green-600 mb-3">Universal Donor: O-</h3>
                  <p className="text-muted-foreground">
                    O negative blood can be given to anyone, making it extremely valuable in emergencies 
                    when there's no time to determine the patient's blood type. Only 7% of the population has this type.
                  </p>
                </div>
                
                <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Universal Receiver: AB+</h3>
                  <p className="text-muted-foreground">
                    AB positive individuals can receive blood from any type, making transfusions easier for them. 
                    However, they can only donate to other AB+ individuals. About 3% of people have this type.
                  </p>
                </div>
                
                <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold text-primary mb-3">Rh Factor</h3>
                  <p className="text-muted-foreground">
                    The + or - after your blood type refers to the Rh factor. Rh negative blood can be given to 
                    Rh positive patients, but Rh positive blood should not be given to Rh negative patients.
                  </p>
                </div>
                
                <div className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/20">
                  <h3 className="text-xl font-bold text-amber-600 mb-3">Most Common Type</h3>
                  <p className="text-muted-foreground">
                    O positive is the most common blood type, found in about 38% of the population. 
                    It's always in high demand at blood banks and hospitals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default BloodTypes;
