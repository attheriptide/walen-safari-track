import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Satellite, Users, Bell, MapPin, Route, History, 
  Power, Video, Fuel, Shield, AlertTriangle, CheckCircle 
} from "lucide-react";

const services = [
  {
    icon: Satellite,
    name: "Real-Time GPS Tracking",
    description: "Know exactly where your vehicle is, every second of every day—even when the engine is off.",
    features: [
      "Live location updates every 10 seconds",
      "Works even when vehicle is turned off",
      "Track on mobile app or web dashboard",
      "Instant theft alerts and notifications"
    ],
    ideal: "Car owners, boda riders, and anyone who wants constant vehicle visibility"
  },
  {
    icon: Users,
    name: "Fleet Management",
    description: "Manage multiple vehicles from one powerful dashboard—track routes, fuel, drivers, and maintenance.",
    features: [
      "Monitor unlimited vehicles in one place",
      "Driver behavior and performance tracking",
      "Automated maintenance reminders",
      "Fuel consumption and cost analysis"
    ],
    ideal: "Businesses, logistics companies, and delivery services"
  },
  {
    icon: Bell,
    name: "Smart Alarm Systems",
    description: "Get instant alerts when someone tries to break into, move, or tamper with your vehicle.",
    features: [
      "Instant SMS and app notifications",
      "Motion detection even when parked",
      "Tamper alerts if GPS is disconnected",
      "Silent alarm mode for stealth protection"
    ],
    ideal: "Anyone parking in Kampala or high-risk areas"
  },
  {
    icon: MapPin,
    name: "Geofencing & Safe Zones",
    description: "Set virtual boundaries and get notified immediately when your vehicle leaves or enters specific areas.",
    features: [
      "Create unlimited geofences",
      "School zones, office areas, delivery routes",
      "Instant boundary breach alerts",
      "Time-based zone restrictions"
    ],
    ideal: "Parents, fleet managers, and business owners"
  },
  {
    icon: Route,
    name: "Route Optimization",
    description: "Save fuel and time with intelligent route planning that learns Kampala's traffic patterns.",
    features: [
      "AI-powered route suggestions",
      "Avoid traffic jams and roadblocks",
      "Compare planned vs actual routes",
      "Reduce fuel costs by up to 30%"
    ],
    ideal: "Delivery drivers, taxi operators, and fleet managers"
  },
  {
    icon: History,
    name: "Trip History & Reports",
    description: "Access detailed records of every trip—where you went, how fast, and how long you were there.",
    features: [
      "90-day trip history storage",
      "Speed reports and driving behavior",
      "Downloadable PDF reports",
      "Insurance and audit-ready data"
    ],
    ideal: "Fleet audits, insurance claims, and business records"
  },
  {
    icon: Power,
    name: "Remote Engine Cut-Off",
    description: "Shut down your vehicle's engine remotely if it's stolen or being misused—fast and secure.",
    features: [
      "Instant remote engine shutdown",
      "Works via mobile app or SMS",
      "Secure authorization process",
      "Police-assisted recovery support"
    ],
    ideal: "Theft recovery and unauthorized use prevention"
  },
  {
    icon: Video,
    name: "Video Telematics & Dashcams",
    description: "Record road conditions, driver behavior, and accidents with AI-powered cameras.",
    features: [
      "HD video recording (front and rear)",
      "Driver-facing cameras for behavior analysis",
      "Accident detection and alerts",
      "Cloud storage for footage backup"
    ],
    ideal: "Fleet safety, insurance claims, and driver training"
  },
  {
    icon: Fuel,
    name: "Fuel Monitoring & Theft Prevention",
    description: "Track fuel consumption, detect siphoning, and reduce wastage with real-time fuel sensors.",
    features: [
      "Real-time fuel level tracking",
      "Instant fuel theft alerts",
      "Refueling and consumption reports",
      "Detect leaks and anomalies"
    ],
    ideal: "Businesses fighting fuel theft and rising costs"
  },
  {
    icon: Shield,
    name: "Vehicle Security Consultancy",
    description: "Get expert advice on how to protect your vehicle, reduce risk, and build a safety culture.",
    features: [
      "Risk assessment for your vehicle/fleet",
      "Custom security recommendations",
      "Driver training and safety workshops",
      "Compliance and insurance support"
    ],
    ideal: "Businesses and high-value vehicle owners"
  },
  {
    icon: AlertTriangle,
    name: "Theft Recovery Assistance",
    description: "When theft happens, we act fast—working with police and using your GPS data to recover your vehicle.",
    features: [
      "24/7 emergency response team",
      "Direct coordination with police",
      "Real-time tracking during recovery",
      "98% successful recovery rate"
    ],
    ideal: "Every vehicle owner—because theft can happen to anyone"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive GPS tracking and vehicle security solutions designed for Uganda's roads and businesses
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <div className="inline-flex items-center text-sm text-primary font-medium">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        {service.ideal}
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                        Key Features
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Talk to our team—we'll recommend the perfect solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/256778711847"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-card border border-border text-foreground font-medium hover:bg-muted transition-colors"
            >
              Request a Demo
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
