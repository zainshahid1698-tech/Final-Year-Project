import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Heart, Droplet, Shield, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

const faqCategories = [
  {
    title: "About Donation",
    icon: Heart,
    questions: [
      {
        q: "Who can donate blood?",
        a: "Generally, you can donate blood if you are at least 17 years old (16 with parental consent in some areas), weigh at least 110 pounds, and are in good health. Specific eligibility criteria may vary based on your location and medical history."
      },
      {
        q: "How often can I donate blood?",
        a: "You can donate whole blood every 56 days (8 weeks). If you donate platelets, you can do so every 7 days, up to 24 times a year. Plasma donation can be done every 28 days."
      },
      {
        q: "How long does a blood donation take?",
        a: "The actual blood donation takes about 8-10 minutes. However, the entire process—including registration, health screening, donation, and refreshments—usually takes about 45 minutes to an hour."
      },
      {
        q: "Does donating blood hurt?",
        a: "You may feel a slight pinch when the needle is inserted, similar to a small pinch. Most donors describe the experience as virtually painless. Any discomfort typically lasts only a few seconds."
      },
      {
        q: "What should I do before donating blood?",
        a: "Get a good night's sleep, eat a healthy meal, drink plenty of water, avoid fatty foods, and bring a valid ID. If you take any medications, bring a list of them to your appointment."
      },
    ]
  },
  {
    title: "Eligibility",
    icon: Shield,
    questions: [
      {
        q: "Can I donate if I have tattoos or piercings?",
        a: "In most cases, yes. If your tattoo was applied at a state-regulated facility with sterile equipment, you can typically donate immediately. If not, you may need to wait 3-12 months depending on local regulations."
      },
      {
        q: "Can I donate if I'm on medication?",
        a: "It depends on the medication. Many medications don't prevent you from donating. However, some medications may require a waiting period or may make you temporarily ineligible. Always disclose all medications during your health screening."
      },
      {
        q: "Can I donate if I recently traveled abroad?",
        a: "Travel to certain countries may result in temporary deferrals due to disease risks like malaria. The waiting period varies by destination and can range from 1 to 12 months. Check with your local blood center for specific guidelines."
      },
      {
        q: "Are there conditions that permanently disqualify me from donating?",
        a: "Some conditions that may permanently disqualify you include HIV, hepatitis B or C, and certain cancers. However, eligibility criteria continue to evolve, so check with your blood center for the most current guidelines."
      },
    ]
  },
  {
    title: "Using BloodBridge",
    icon: Droplet,
    questions: [
      {
        q: "How do I register as a donor on BloodBridge?",
        a: "Click the 'Donate Blood' button on our website, create an account with your email, fill in your profile with blood type and location, and you're ready to start receiving donation requests from those in need."
      },
      {
        q: "How do I request blood through BloodBridge?",
        a: "Register as a receiver, fill out a blood request form specifying the blood type needed, quantity, and urgency level. Our system will match you with compatible donors in your area."
      },
      {
        q: "Is my personal information secure on BloodBridge?",
        a: "Yes, we take privacy very seriously. All personal data is encrypted and stored securely. We never share your information with third parties without your consent. Read our privacy policy for more details."
      },
      {
        q: "How quickly can I find a donor through BloodBridge?",
        a: "Our matching system works in real-time. For urgent requests, we send immediate notifications to compatible donors in your area. Most urgent requests receive responses within hours."
      },
      {
        q: "Is there a fee to use BloodBridge?",
        a: "No, BloodBridge is completely free for both donors and recipients. Our mission is to save lives, and we believe that connecting donors with those in need should never have a price barrier."
      },
    ]
  },
  {
    title: "After Donation",
    icon: Clock,
    questions: [
      {
        q: "What should I do after donating blood?",
        a: "Rest for a few minutes, have some refreshments, avoid strenuous activity for 24 hours, drink plenty of fluids, and keep the bandage on for at least 4 hours. If you feel dizzy, lie down with your feet elevated."
      },
      {
        q: "How long does it take for my body to replace the donated blood?",
        a: "Your body replaces the fluid lost from donation within 24 hours. Red blood cells are replaced within 4-6 weeks. This is why you need to wait at least 56 days between whole blood donations."
      },
      {
        q: "Will I receive updates about my donation?",
        a: "Yes! BloodBridge notifies you when your donated blood has been used and how it helped. You can track your donation history and impact through your donor dashboard."
      },
    ]
  },
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - BloodBridge</title>
        <meta name="description" content="Find answers to common questions about blood donation, eligibility, the donation process, and using BloodBridge to connect with donors and recipients." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-rose-soft via-background to-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                <HelpCircle className="h-4 w-4" />
                FAQ
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Frequently Asked{" "}
                <span className="text-primary">Questions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about blood donation, eligibility, 
                and using BloodBridge.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.title}-${index}`}
                        className="bg-card rounded-xl border border-border px-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-5">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:support@bloodbridge.org" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                  Email Support
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-xl font-semibold hover:bg-accent transition-colors">
                  Contact Us
                </a>
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

export default FAQ;
