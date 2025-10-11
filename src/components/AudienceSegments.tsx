import { Car, Building2, Bike, Store, Users } from "lucide-react";

const segments = [
  {
    icon: Car,
    label: "Car Owners",
    message: "You worked hard for your car. We help you protect it — with real-time tracking, smart alerts, and remote control.",
    subtext: "Whether parked at home or on the road, your vehicle is never alone."
  },
  {
    icon: Building2,
    label: "Businesses",
    message: "Your fleet is your backbone. We help you manage it smarter — with dashboards, fuel tracking, and driver monitoring.",
    subtext: "From delivery vans to service vehicles, we make your operations safer and more efficient."
  },
  {
    icon: Bike,
    label: "Boda Riders",
    message: "Your bike is your livelihood. We help you track it, protect it, and recover it if stolen.",
    subtext: "Ride with confidence — knowing your boda is always within reach."
  },
  {
    icon: Store,
    label: "Dealerships",
    message: "Offer peace of mind to your customers. Our tracking solutions add value and trust to every sale.",
    subtext: "Turn every vehicle into a protected asset — and every buyer into a loyal client."
  },
  {
    icon: Users,
    label: "Everyone",
    message: "If you own a vehicle in Uganda, Walen is here to help you protect it.",
    subtext: "Safety isn't a luxury — it's a right. And we make it accessible to all."
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-xl bg-gradient-to-br from-card to-background border border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-[var(--shadow-card)] hover:-translate-y-2 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <segment.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-secondary group-hover:scale-105 transition-transform">
                {segment.label}
              </h3>
              <p className="text-foreground text-lg leading-relaxed">
                {segment.message}
              </p>
              <p className="text-sm text-muted-foreground italic pt-2 border-t border-border/50">
                {segment.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSegments;
