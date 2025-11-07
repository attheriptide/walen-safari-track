import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Satellite, Users, Bell, MapPin, Route, History, 
  Power, Video, Fuel, Shield, AlertTriangle, CheckCircle 
} from "lucide-react";
import gpsTrackingImg from "@/assets/service-gps-tracking.jpg";
import fleetManagementImg from "@/assets/service-fleet-management.jpg";
import alertsImg from "@/assets/service-alerts.jpg";
import infographicImg from "@/assets/infographic-how-it-works.jpg";

const services = [
  {
    icon: Satellite,
    name: "Real-Time GPS Tracking",
    description: "Know exactly where your vehicles are at any moment. Our live maps update instantly, so you're always in control — right from your phone.",
    image: gpsTrackingImg,
    features: [
      "Live location tracking on mobile and web",
      "Works even when vehicle is turned off",
      "Track multiple vehicles from one dashboard",
      "Instant alerts for unauthorized movement"
    ]
  },
  {
    icon: Users,
    name: "Fleet & Driver Management",
    description: "Monitor driver behavior, fuel usage, and maintenance schedules from one dashboard. Cut costs, reduce downtime, and improve efficiency.",
    image: fleetManagementImg,
    features: [
      "Track driver performance and behavior",
      "Monitor fuel consumption in real-time",
      "Schedule maintenance automatically",
      "Optimize routes to save time and fuel"
    ]
  },
  {
    icon: Power,
    name: "Remote Engine Control",
    description: "Lost a vehicle or facing theft? Instantly cut off the engine remotely and keep your assets safe — directly through your mobile app.",
    image: infographicImg,
    features: [
      "Shut down engine from anywhere",
      "Secure authorization process",
      "Works via mobile app or SMS",
      "Police-assisted recovery support"
    ]
  },
  {
    icon: Bell,
    name: "Alerts & Reports",
    description: "Get instant alerts for speeding, route deviations, idling, and more. Stay informed and in charge 24/7.",
    image: alertsImg,
    features: [
      "SMS and app notifications",
      "Customizable alert types",
      "Detailed trip history reports",
      "Downloadable data for audits"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/30 via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete vehicle tracking and security solutions designed for Uganda
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.name} - Professional GPS vehicle tracking service in Uganda`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {service.name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's help you choose the right solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/256778478671"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Request a Demo
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-card border-2 border-border text-foreground font-medium hover:bg-muted transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
