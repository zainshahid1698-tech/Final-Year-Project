import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, Search, Droplet, Heart, FileCheck, 
  Bell, Calendar, Award, Shield, Clock, ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const donorSteps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up as a donor with your basic information and blood type.",
  },
  {
    icon: FileCheck,
    title: "Complete Profile",
    description: "Add your location, availability, and health information for eligibility.",
  },
  {
    icon: Bell,
    title: "Receive Requests",
    description: "Get notified when someone in your area needs your blood type.",
  },
  {
    icon: Calendar,
    title: "Schedule Donation",
    description: "Accept requests and schedule your donation at a convenient time.",
  },
  {
    icon: Droplet,
    title: "Donate Blood",
    description: "Visit the hospital or blood bank and complete your donation.",
  },
  {
    icon: Award,
    title: "Save Lives",
    description: "Track your impact and see how your donations help save lives.",
  },
];

const receiverSteps = [
  {
    icon: UserPlus,
    title: "Register",
    description: "Create an account as a blood receiver with your details.",
  },
  {
    icon: FileCheck,
    title: "Submit Request",
    description: "Fill out a blood request form with required blood type and urgency.",
  },
  {
    icon: Search,
    title: "Find Donors",
    description: "Our system matches you with compatible donors in your area.",
  },
  {
    icon: Bell,
    title: "Get Connected",
    description: "Receive notifications when donors accept your request.",
  },
  {
    icon: Heart,
    title: "Receive Blood",
    description: "Coordinate with donors and hospitals for the transfusion.",
  },
];

const features = [
  {
    icon: Shield,
    title: "Verified Donors",
    description: "All donors undergo verification to ensure safety and eligibility.",
  },
  {
    icon: Clock,
    title: "Quick Matching",
    description: "Our algorithm finds compatible donors within minutes.",
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "Instant notifications for urgent blood requirements.",
  },
  {
    icon: Award,
    title: "Impact Tracking",
    description: "See the real impact of your donations on lives saved.",
  },
];

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How BloodBridge Works - Simple Steps to Save Lives</title>
        <meta name="description" content="Learn how BloodBridge connects blood donors with recipients. Simple steps for donors and receivers to save lives through blood donation." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-rose-soft via-background to-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                How It Works
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Simple Steps to{" "}
                <span className="text-primary">Save Lives</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Whether you're a donor looking to give or someone in need of blood, 
                our process is designed to be quick, safe, and efficient.
              </p>
            </div>
          </div>
        </section>

        {/* For Donors Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Heart className="h-4 w-4" />
                For Blood Donors
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Become a Donor in 6 Easy Steps
              </h2>
              <p className="text-lg text-muted-foreground">
                Your journey to becoming a life-saver starts here. Follow these simple steps 
                to register and start donating.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {donorSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/donate">
                <Button size="lg" className="group">
                  <Heart className="h-5 w-5" />
                  Start Donating Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* For Receivers Section */}
        <section className="py-20 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mb-4">
                <Droplet className="h-4 w-4" />
                For Blood Receivers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Request Blood in 5 Simple Steps
              </h2>
              <p className="text-lg text-muted-foreground">
                When you or your loved ones need blood, we're here to help. 
                Our platform connects you with donors quickly and securely.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
              {receiverSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                    <step.icon className="h-7 w-7 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/request">
                <Button size="lg" variant="outline" className="group">
                  <Droplet className="h-5 w-5" />
                  Request Blood Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                Platform Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose BloodBridge?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default HowItWorks;
