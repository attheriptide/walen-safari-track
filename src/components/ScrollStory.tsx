import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Shield, Sparkles } from "lucide-react";

const storyData = [
  {
    icon: AlertTriangle,
    section: "The Problem",
    text: "Vehicle theft is rising. Fuel costs are unpredictable. Fleet confusion is common. Whether you own a car, manage a fleet, or ride a boda — you deserve peace of mind.",
    gradient: "from-destructive/20 via-background to-background"
  },
  {
    icon: Shield,
    section: "The Promise",
    text: "Walen Tracking Solutions Uganda helps you take control. We turn uncertainty into clarity, and risk into safety — with real-time GPS tracking, smart alerts, and remote control.",
    gradient: "from-primary/20 via-background to-background"
  },
  {
    icon: Sparkles,
    section: "The Transformation",
    text: "Imagine waking up and knowing exactly where your vehicle is. Your fleet runs smoother. Your boda is safer. Your business is more efficient. That's the Walen difference.",
    gradient: "from-success/20 via-background to-background"
  }
];

const ScrollStory = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-32">
          {storyData.map((story, index) => (
            <div
              key={index}
              ref={el => sectionRefs.current[index] = el}
              className={`relative transition-all duration-1000 ${
                visibleSections.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${story.gradient} blur-3xl opacity-50 -z-10`} />
              
              <div className="text-center space-y-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[var(--shadow-card)] mb-4">
                  <story.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Section title */}
                <h3 className="text-2xl md:text-3xl font-bold text-secondary">
                  {story.section}
                </h3>
                
                {/* Story text */}
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                  {story.text}
                </p>
              </div>
              
              {/* Decorative line */}
              {index < storyData.length - 1 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-16 w-px h-16 bg-gradient-to-b from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollStory;