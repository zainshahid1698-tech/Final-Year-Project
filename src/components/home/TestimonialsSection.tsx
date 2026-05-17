import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Omar",
    role: "Blood Donor",
    image: null,
    content: "BloodBridge made it incredibly easy for me to become a regular donor. The platform connected me with a local hospital within minutes. Knowing my donation helped save lives is the greatest reward.",
    rating: 5,
  },
  {
    name: "Dr. Aisha",
    role: "Hospital Administrator",
    image: null,
    content: "As a hospital, BloodBridge has been invaluable. We can now find compatible donors quickly during emergencies. The verification system ensures we only connect with genuine, eligible donors.",
    rating: 5,
  },
  {
    name: "Ali",
    role: "Blood Recipient",
    image: null,
    content: "After my accident, I needed multiple transfusions. BloodBridge helped my family find donors when the hospital was running low. I'm alive today because of this platform and generous donors.",
    rating: 5,
  },
  {
    name: "Zara",
    role: "Regular Donor",
    image: null,
    content: "I've been donating blood for 10 years, but BloodBridge made it more meaningful. I can see the direct impact of my donations and even got thank you messages from recipients. Truly heartwarming.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-rose-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Lives Touched, Hearts Connected
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from our community of donors, recipients, and healthcare partners.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Quote className="h-5 w-5 text-primary-foreground" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
