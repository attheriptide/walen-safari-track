import { Car, Building2, Bike, Store, Users } from "lucide-react";

const segments = [
  {
    icon: Car,
    label: "Car Owners",
    message: "Protect your car from theft and misuse with 24/7 tracking."
  },
  {
    icon: Building2,
    label: "Businesses",
    message: "Manage your fleet with confidence and reduce operational costs."
  },
  {
    icon: Bike,
    label: "Boda Riders",
    message: "Track your bike and stay safe on Kampala's roads."
  },
  {
    icon: Store,
    label: "Dealerships",
    message: "Offer tracking and safety solutions to your customers."
  },
  {
    icon: Users,
    label: "Everyone",
    message: "If you own a vehicle, we've got you covered."
  }
];

const AudienceSegments = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Who We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by drivers, businesses, and riders across Uganda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-xl bg-gradient-to-br from-card to-background border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <segment.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {segment.label}
              </h3>
              <p className="text-muted-foreground">
                {segment.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSegments;
