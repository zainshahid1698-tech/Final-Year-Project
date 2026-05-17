import { Button } from "@/components/ui/button";
import { Heart, Users, Droplet, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-soft via-background to-warm-gray" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      
      {/* Floating Blood Drop Icons */}
      <div className="absolute top-1/4 right-1/4 text-primary/10 animate-float">
        <Droplet className="h-16 w-16 fill-current" />
      </div>
      <div className="absolute bottom-1/3 left-1/5 text-primary/10 animate-float" style={{ animationDelay: "2s" }}>
        <Droplet className="h-12 w-12 fill-current" />
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium animate-fade-in">
              <Heart className="h-4 w-4 fill-current" />
              <span>Save Lives, Donate Blood</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-slide-up">
              Be the{" "}
              <span className="text-primary relative">
                Bridge
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30"/>
                </svg>
              </span>{" "}
              That Saves Lives
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Every drop counts. Connect with donors and recipients in your area. 
              Your donation can give someone a second chance at life.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/donate">
                <Button variant="hero" size="xl" className="group">
                  <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Donate Blood
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/request">
                <Button variant="outline" size="xl">
                  Request Blood
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-background flex items-center justify-center"
                    >
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">10,000+</p>
                  <p className="text-sm text-muted-foreground">Active Donors</p>
                </div>
              </div>
              
              <div className="h-12 w-px bg-border hidden sm:block" />
              
              <div>
                <p className="font-semibold text-foreground">50,000+</p>
                <p className="text-sm text-muted-foreground">Lives Saved</p>
              </div>
              
              <div className="h-12 w-px bg-border hidden sm:block" />
              
              <div>
                <p className="font-semibold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Emergency Support</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square animate-scale-in">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full blood-gradient opacity-90 shadow-glow" />
              
              {/* Inner Content */}
              <div className="absolute inset-8 rounded-full bg-background/95 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <Droplet className="h-24 w-24 text-primary mx-auto mb-6 animate-float" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">One Donation</h3>
                  <p className="text-muted-foreground">Can save up to</p>
                  <p className="text-5xl font-bold text-primary mt-2">3 Lives</p>
                </div>
              </div>
              
              {/* Pulse Rings */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse-ring" />
              <div className="absolute inset-0 rounded-full border-4 border-primary/10 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -left-8 top-1/4 glass rounded-2xl p-4 shadow-lg animate-slide-in-left" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Quick Match</p>
                  <p className="text-sm text-muted-foreground">Find donors nearby</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-4 bottom-1/4 glass rounded-2xl p-4 shadow-lg animate-slide-in-left" style={{ animationDelay: "0.7s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Verified Donors</p>
                  <p className="text-sm text-muted-foreground">100% Safe & Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
