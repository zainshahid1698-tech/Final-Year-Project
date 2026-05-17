import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-24 blood-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8">
            <Heart className="h-10 w-10 text-white animate-pulse" />
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          
          {/* Description */}
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Your decision to donate blood today could save up to three lives. 
            Join thousands of heroes who have already made the choice to give.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/donate">
              <Button
                size="xl"
                className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
                Become a Donor
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/request">
              <Button
                size="xl"
                variant="heroOutline"
              >
                Request Blood
              </Button>
            </Link>
          </div>
          
          {/* Emergency Contact */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Phone className="h-5 w-5 text-white" />
            <span className="text-white font-medium">24/7 Emergency Helpline:</span>
            <a href="tel:+1234567890" className="text-white font-bold hover:underline">
              1122
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
