import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Building2, Bike, Store, Shield } from "lucide-react";

const solutions = [
  {
    icon: Car,
    label: "For Car Owners",
    title: "Protect Your Investment",
    description: "You worked hard for your car. Whether it's a family vehicle or your daily commute, we help you protect it with real-time tracking, theft alerts, and remote engine control.",
    benefits: [
      "24/7 real-time location tracking",
      "Instant theft and tamper alerts",
      "Remote engine cut-off if stolen",
      "Geofencing for home and work zones",
      "Trip history for insurance claims"
    ],
    testimonial: "After my car was stolen in Naalya, Walen helped police recover it within 6 hours. The tracking data was exact.",
    cta: "Protect Your Car"
  },
  {
    icon: Building2,
    label: "For Businesses & Fleets",
    title: "Run Smarter, Safer, More Efficiently",
    description: "Managing multiple vehicles is complex. We simplify it with one dashboard that tracks everything—routes, fuel, drivers, and maintenance.",
    benefits: [
      "Monitor unlimited vehicles from one place",
      "Reduce fuel costs by up to 30%",
      "Track driver behavior and performance",
      "Automated maintenance scheduling",
      "Real-time route optimization"
    ],
    testimonial: "We cut fuel waste by 25% in 3 months. The dashboards make fleet management actually manageable.",
    cta: "Optimize Your Fleet"
  },
  {
    icon: Bike,
    label: "For Boda Riders",
    title: "Your Bike, Your Livelihood, Protected",
    description: "Your motorcycle is how you earn. We help you track it, protect it from theft, and recover it fast if something happens.",
    benefits: [
      "Affordable tracking for bodas",
      "Instant theft alerts to your phone",
      "Fast recovery with police support",
      "Geofencing for safe parking zones",
      "SMS alerts—no internet needed"
    ],
    testimonial: "My boda was taken while I was delivering. I called Walen, they tracked it, and I got it back the same day.",
    cta: "Secure Your Boda"
  },
  {
    icon: Store,
    label: "For Dealerships",
    title: "Add Value to Every Sale",
    description: "Stand out from competitors by offering built-in GPS tracking with every vehicle sale. It's not just a product—it's peace of mind.",
    benefits: [
      "Pre-install trackers before delivery",
      "Offer tracking as a premium package",
      "Partner discounts and support",
      "Marketing support and materials",
      "Strengthen customer trust and loyalty"
    ],
    testimonial: "Our customers love knowing their new cars come with Walen tracking. It's become our best selling point.",
    cta: "Partner With Us"
  },
  {
    icon: Shield,
    label: "For Everyone",
    title: "Vehicle Safety is a Right, Not a Luxury",
    description: "Whether you're a student, parent, entrepreneur, or retiree—if you own a vehicle in Uganda, Walen is here to protect it.",
    benefits: [
      "Affordable plans for all budgets",
      "Simple installation and setup",
      "24/7 customer support in Kampala",
      "Flexible payment options",
      "No hidden fees or contracts"
    ],
    testimonial: "I never thought I could afford GPS tracking. Walen made it easy and affordable. Now I sleep better.",
    cta: "Get Protected Today"
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/30 via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Our Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're managing a small delivery team, a long-haul fleet, or a personal car, Walen Safari Track offers flexible solutions that fit your needs
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <Card 
                className={`bg-card border-border shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  index % 2 === 1 ? 'md:col-start-2' : ''
                }`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                    {solution.label}
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/256778711847"
                    className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                  >
                    {solution.cta}
                  </a>
                </CardContent>
              </Card>

              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <div className="bg-muted/30 border border-border rounded-2xl p-8">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-lg text-foreground italic mb-4">
                    "{solution.testimonial}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <solution.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Real Client</div>
                      <div className="text-xs text-muted-foreground">{solution.label.replace('For ', '')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Not Sure Which Solution Fits?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team will help you find the perfect tracking solution for your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/256778711847"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Talk to an Expert
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-card border border-border text-foreground font-medium hover:bg-muted transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Solutions;
