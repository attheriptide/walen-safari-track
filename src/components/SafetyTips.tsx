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
    <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Vehicle Safety Tips for Kampala
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical advice to keep your vehicles safe on Uganda's roads
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-5 rounded-lg bg-card border border-border hover:border-success/50 transition-all duration-300 hover:shadow-md"
            >
              <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
              <p className="text-foreground leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
