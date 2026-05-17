import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Globe, Award, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Every life matters. We're driven by the desire to help those in critical need.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Rigorous verification ensures all donors and recipients are genuine and eligible.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a network of heroes who stand ready to save lives at a moment's notice.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making blood donation accessible to everyone, everywhere, anytime.",
  },
];

const milestones = [
  { year: "2020", title: "Founded", description: "BloodBridge was established with a mission to bridge the gap between donors and recipients." },
  { year: "2021", title: "10K Donors", description: "Reached our first milestone of 10,000 registered blood donors." },
  { year: "2022", title: "50 Cities", description: "Expanded operations to 50 cities across the nation." },
  { year: "2023", title: "50K Lives", description: "Facilitated donations that helped save over 50,000 lives." },
  { year: "2024", title: "100+ Partners", description: "Partnered with over 100 hospitals and blood banks." },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About BloodBridge - Our Mission to Save Lives</title>
        <meta name="description" content="Learn about BloodBridge's mission to connect blood donors with those in need. Discover our values, story, and impact on communities worldwide." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-rose-soft via-background to-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Bridging the Gap Between{" "}
                <span className="text-primary">Hope</span> and{" "}
                <span className="text-primary">Help</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                BloodBridge is more than a platform—it's a lifeline that connects generous donors 
                with those fighting for their lives.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Making Blood Donation Accessible to Everyone
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Every two seconds, someone in the world needs blood. Yet, blood shortages remain 
                  a critical challenge in healthcare. BloodBridge was founded to solve this problem 
                  by creating a seamless connection between willing donors and those in desperate need.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Our platform leverages technology to make the blood donation process quick, 
                  transparent, and efficient—ensuring that no one has to wait when lives are on the line.
                </p>
                <Link to="/how-it-works">
                  <Button variant="default" className="group">
                    Learn How It Works
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-primary/10 rounded-2xl p-8 text-center">
                      <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-foreground">10K+</h3>
                      <p className="text-muted-foreground">Active Donors</p>
                    </div>
                    <div className="bg-card rounded-2xl p-8 text-center shadow-lg">
                      <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-foreground">100+</h3>
                      <p className="text-muted-foreground">Cities Covered</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-card rounded-2xl p-8 text-center shadow-lg">
                      <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-foreground">50K+</h3>
                      <p className="text-muted-foreground">Lives Saved</p>
                    </div>
                    <div className="bg-primary/10 rounded-2xl p-8 text-center">
                      <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-foreground">24/7</h3>
                      <p className="text-muted-foreground">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Drives Us Forward
              </h2>
              <p className="text-lg text-muted-foreground">
                Our core values guide every decision we make and every connection we facilitate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Milestones That Define Us
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/20 transform md:-translate-x-1/2" />
                
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 z-10" />
                    
                    {/* Content */}
                    <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <div className="bg-card rounded-xl p-6 shadow-lg">
                        <span className="text-primary font-bold text-lg">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
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

export default About;
