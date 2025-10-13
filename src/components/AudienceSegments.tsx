import { Car, Building2, Bike, Store, Users, ChevronRight } from "lucide-react";

const audiences = [
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
    <section id="audience" className="py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-semibold text-success uppercase tracking-wider">
            SOLUTIONS FOR EVERYONE
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Who We Serve
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored tracking solutions for every type of vehicle owner in Uganda
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <audience.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {audience.label}
                  </h3>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    {audience.message}
                  </p>
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground italic">
                      {audience.subtext}
                    </p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 self-center md:self-start md:pt-4">
                  <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSegments;
