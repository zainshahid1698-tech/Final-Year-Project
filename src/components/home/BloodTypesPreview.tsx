import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const bloodTypes = [
  { type: "A+", canDonateTo: ["A+", "AB+"], canReceiveFrom: ["A+", "A-", "O+", "O-"], population: "35%" },
  { type: "A-", canDonateTo: ["A+", "A-", "AB+", "AB-"], canReceiveFrom: ["A-", "O-"], population: "6%" },
  { type: "B+", canDonateTo: ["B+", "AB+"], canReceiveFrom: ["B+", "B-", "O+", "O-"], population: "8%" },
  { type: "B-", canDonateTo: ["B+", "B-", "AB+", "AB-"], canReceiveFrom: ["B-", "O-"], population: "2%" },
  { type: "O+", canDonateTo: ["O+", "A+", "B+", "AB+"], canReceiveFrom: ["O+", "O-"], population: "38%" },
  { type: "O-", canDonateTo: ["All Types"], canReceiveFrom: ["O-"], population: "7%", special: "Universal Donor" },
  { type: "AB+", canDonateTo: ["AB+"], canReceiveFrom: ["All Types"], population: "3%", special: "Universal Receiver" },
  { type: "AB-", canDonateTo: ["AB+", "AB-"], canReceiveFrom: ["A-", "B-", "O-", "AB-"], population: "1%" },
];

export const BloodTypesPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Blood Compatibility
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Know Your Blood Type
          </h2>
          <p className="text-lg text-muted-foreground">
            Understanding blood type compatibility is crucial for safe transfusions. 
            Find out who you can donate to and receive from.
          </p>
        </div>
        
        {/* Blood Types Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {bloodTypes.map((blood) => (
            <div
              key={blood.type}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Special Badge */}
              {blood.special && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full whitespace-nowrap">
                    {blood.special}
                  </span>
                </div>
              )}
              
              {/* Blood Type */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-3">
                  <span className="text-2xl font-bold text-primary">{blood.type}</span>
                </div>
                <p className="text-sm text-muted-foreground">{blood.population} of population</p>
              </div>
              
              {/* Compatibility Info */}
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Can donate to:</p>
                  <div className="flex flex-wrap gap-1">
                    {blood.canDonateTo.map((type) => (
                      <span
                        key={type}
                        className="px-2 py-0.5 bg-green-500/10 text-green-600 rounded text-xs font-medium"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Can receive from:</p>
                  <div className="flex flex-wrap gap-1">
                    {blood.canReceiveFrom.map((type) => (
                      <span
                        key={type}
                        className="px-2 py-0.5 bg-blue-500/10 text-blue-600 rounded text-xs font-medium"
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
        
        {/* CTA */}
        <div className="text-center">
          <Link to="/blood-types">
            <Button variant="outline" size="lg" className="group">
              View Full Compatibility Chart
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
