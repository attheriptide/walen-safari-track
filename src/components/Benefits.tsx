import { MapPin, ShieldAlert, Fuel, Bell, CarFront } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Know where your car is",
    description: "Track location even when it's turned off"
  },
  {
    icon: ShieldAlert,
    title: "Remote engine control",
    description: "Turn off your car remotely if stolen"
  },
  {
    icon: Fuel,
    title: "Save fuel costs",
    description: "Optimize routes and reduce expenses"
  },
  {
    icon: Bell,
    title: "Smart alerts",
    description: "Get notified before trouble happens"
  },
  {
    icon: CarFront,
    title: "Fast recovery",
    description: "Recover stolen vehicles faster"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Choose Walen Tracking?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete peace of mind for every journey in Kampala and beyond
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-card to-muted border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
