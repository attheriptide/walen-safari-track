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
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
            PLATFORM BENEFITS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Why Choose Walen Tracking?
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete peace of mind for every journey in Kampala and beyond
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-b from-card to-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-card)]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
