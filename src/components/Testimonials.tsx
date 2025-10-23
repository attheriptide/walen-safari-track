import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-businessman.jpg";
import testimonial2 from "@/assets/testimonial-logistics.jpg";
import testimonial3 from "@/assets/testimonial-driver.jpg";

const testimonials = [
  {
    name: "Grace Nakato",
    role: "Business Owner, Kampala",
    image: testimonial1,
    alt: "African businessman using GPS vehicle tracking app on smartphone in modern office setting in Uganda",
    quote: "Within 3 hours of my car being stolen, Walen helped me recover it using the remote cut-off feature. They saved my business!",
    rating: 5
  },
  {
    name: "David Okello",
    role: "Fleet Manager, UCMI Transport",
    image: testimonial2,
    alt: "Professional logistics manager reviewing fleet management data on tablet in warehouse facility in Kampala",
    quote: "We've reduced fuel costs by 30% and improved driver accountability. The dashboard makes managing 20+ vehicles so easy.",
    rating: 5
  },
  {
    name: "James Musoke",
    role: "Taxi Driver, Kampala",
    image: testimonial3,
    alt: "Happy Ugandan taxi driver standing confidently next to GPS-tracked vehicle in Kampala city streets",
    quote: "With Walen, my passengers trust me more. They can see I'm driving safely, and I've built a reputation for being reliable.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Trusted by Ugandans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real customers in Kampala
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border bg-card hover:shadow-[var(--shadow-card)] transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.alt}
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-6 flex-wrap justify-center text-muted-foreground">
            <span className="font-semibold">As trusted by:</span>
            <span className="px-4 py-2 bg-card rounded-lg border border-border">MTN Uganda</span>
            <span className="px-4 py-2 bg-card rounded-lg border border-border">Local Garages</span>
            <span className="px-4 py-2 bg-card rounded-lg border border-border">Insurance Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
