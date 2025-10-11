import { Radio, Truck, Bell, MapPinned, Route, FileText, Power, Video, Droplet, HeartHandshake, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Radio,
    name: "Comprehensive GPS Tracking",
    description: "See your vehicle's location in real time — even when it's turned off. Our trackers work 24/7 to give you peace of mind.",
    subtext: "Perfect for car owners, boda riders, and fleet managers who want constant visibility and control."
  },
  {
    icon: Truck,
    name: "Fleet Management",
    description: "Monitor multiple vehicles from one dashboard. Track fuel, routes, driver behavior, and maintenance schedules.",
    subtext: "Ideal for businesses and logistics teams looking to cut costs and improve efficiency."
  },
  {
    icon: Bell,
    name: "Car Alarm Systems",
    description: "Get instant alerts if someone tampers with your vehicle. Our alarms are smart, silent, and fast.",
    subtext: "Designed for Kampala's unpredictable parking environments — protect your car even when you're away."
  },
  {
    icon: MapPinned,
    name: "Geofencing Alerts",
    description: "Set safe zones and get notified when your vehicle leaves them. Great for school runs, deliveries, or fleet boundaries.",
    subtext: "Empowers parents, managers, and boda owners to stay in control without constant checking."
  },
  {
    icon: Route,
    name: "Route Optimization",
    description: "Plan smarter routes to save fuel and time. Our system learns your patterns and suggests better paths.",
    subtext: "Built for Kampala's traffic realities — avoid jams, reduce fuel costs, and arrive on time."
  },
  {
    icon: FileText,
    name: "History Reports",
    description: "View past trips, stops, and driving behavior. Great for audits, safety reviews, and insurance claims.",
    subtext: "Helps businesses and individuals understand how their vehicles are used — and improve safety."
  },
  {
    icon: Power,
    name: "Remote Engine Cut-Off",
    description: "Turn off your car remotely if it's stolen or misused. Fast, secure, and effective.",
    subtext: "A powerful tool for theft recovery and unauthorized use — trusted by Kampala drivers."
  },
  {
    icon: Video,
    name: "Video Telematics",
    description: "Monitor road conditions and driver behavior with onboard cameras. Improve safety and accountability.",
    subtext: "Essential for fleets, delivery services, and high-risk routes — see what your vehicle sees."
  },
  {
    icon: Droplet,
    name: "Fuel Management",
    description: "Track fuel usage and reduce waste. Get alerts for refueling, leaks, or unusual consumption.",
    subtext: "Helps businesses cut costs and drivers stay efficient — especially with rising fuel prices."
  },
  {
    icon: HeartHandshake,
    name: "Car Safety Consultancy",
    description: "Get expert advice on protecting your vehicle, managing risk, and improving safety.",
    subtext: "We don't just sell tech — we help you build a safer driving culture in Uganda."
  },
  {
    icon: AlertCircle,
    name: "Theft Recovery Assistance",
    description: "Fast response and support to recover stolen vehicles. We work with local authorities and your data.",
    subtext: "When theft happens, we act fast — because recovery is not just possible, it's expected."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive vehicle tracking and safety solutions tailored for Uganda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] bg-card overflow-hidden"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
                <p className="text-sm text-muted-foreground italic border-l-2 border-secondary/30 pl-3">
                  {service.subtext}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
