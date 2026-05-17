import { UserPlus, Search, Droplet, Heart, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Register",
    description: "Create your account as a donor or receiver in just a few simple steps.",
    color: "bg-blue-500",
  },
  {
    icon: Search,
    title: "Find Match",
    description: "Search for compatible blood donors or submit your blood request.",
    color: "bg-amber-500",
  },
  {
    icon: Droplet,
    title: "Connect",
    description: "Get connected with verified donors or receivers in your area.",
    color: "bg-primary",
  },
  {
    icon: Heart,
    title: "Save Lives",
    description: "Complete the donation process and help save precious lives.",
    color: "bg-green-500",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-warm-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How BloodBridge Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined process makes blood donation and requests quick, safe, and efficient.
          </p>
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-primary to-green-500 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group">
                {/* Card */}
                <div className="relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
