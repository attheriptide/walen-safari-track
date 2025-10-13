import { CheckCircle2 } from "lucide-react";

const tips = [
  "Always park in well-lit areas and lock your doors — even for short stops.",
  "Install a GPS tracker to monitor your vehicle in real time and respond faster to theft.",
  "Use geofencing to get alerts when your vehicle leaves safe zones like home or work.",
  "Avoid sharing your vehicle's location publicly or with unknown contacts.",
  "Schedule regular maintenance to prevent breakdowns and improve fuel efficiency.",
  "Train your drivers on safe driving habits and route planning.",
  "Use remote engine cut-off if your vehicle is stolen — and report immediately.",
  "For boda riders: wear helmets, avoid night rides in risky areas, and track your bike."
];

const SafetyTips = () => {
  return (
    <section id="safety" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-semibold text-success uppercase tracking-wider">
            BEST PRACTICES
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Vehicle Safety Tips for Kampala
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical advice to keep your vehicles safe on Uganda's roads
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-8 rounded-2xl bg-card border border-border hover:border-success/40 transition-all duration-300 hover:shadow-[var(--shadow-card)] group"
            >
              <CheckCircle2 className="w-7 h-7 text-success flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-foreground/90 leading-relaxed text-base">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
