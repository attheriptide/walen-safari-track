import { Radio, Truck, Bell, MapPinned, Route, FileText, Power, Video, Droplet, HeartHandshake, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Radio,
    name: "Comprehensive GPS Tracking",
    description: "Real-time location updates and 24/7 monitoring for all vehicles."
  },
  {
    icon: Truck,
    name: "Fleet Management",
    description: "Manage multiple vehicles with smart dashboards and reports."
  },
  {
    icon: Bell,
    name: "Car Alarm Systems",
    description: "Instant alerts for tampering, theft, or unauthorized access."
  },
  {
    icon: MapPinned,
    name: "Geofencing Alerts",
    description: "Get notified when vehicles leave safe zones or enter restricted areas."
  },
  {
    icon: Route,
    name: "Route Optimization",
    description: "Plan smarter routes to save fuel and time."
  },
  {
    icon: FileText,
    name: "History Reports",
    description: "View past trips, stops, and driving behavior."
  },
  {
    icon: Power,
    name: "Remote Engine Cut-Off",
    description: "Disable stolen or misused vehicles remotely for fast recovery."
  },
  {
    icon: Video,
    name: "Video Telematics",
    description: "Monitor driver behavior and road conditions with onboard cameras."
  },
  {
    icon: Droplet,
    name: "Fuel Management",
    description: "Track fuel usage and reduce waste across your fleet."
  },
  {
    icon: HeartHandshake,
    name: "Car Safety Consultancy",
    description: "Expert advice to protect your vehicles and improve safety."
  },
  {
    icon: AlertCircle,
    name: "Theft Recovery Assistance",
    description: "Fast response and support to recover stolen vehicles."
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
              className="border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] bg-card"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
