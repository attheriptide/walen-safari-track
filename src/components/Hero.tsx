import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Trusted by 500+ Ugandan Drivers</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Smart Vehicle Tracking for
              <span className="block text-primary mt-2">Uganda's Roads</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              We help individuals and businesses track, protect, and manage their vehicles with simple, reliable GPS technology — all from their phone.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Button 
                size="lg"
                className="text-base px-8 h-12 animate-pulse-glow"
                onClick={() => window.open('https://wa.me/256778711847?text=Hi!%20I%20want%20to%20track%20my%20car.%20Can%20you%20help?', '_blank')}
              >
                Get started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-base px-8 h-12 border-border hover:bg-muted"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch demo
              </Button>
            </div>
            
            <div className="flex items-center gap-2 pt-4">
              <Play className="w-4 h-4 text-primary" />
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors underline">
                Discover what Walen can do (1:25)
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden border-4 border-primary/20 shadow-[var(--shadow-premium)]">
              <img 
                src={heroImage} 
                alt="GPS Tracking Dashboard showcasing real-time vehicle monitoring" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-[var(--shadow-elegant)] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-success">98%</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Recovery Rate</div>
                  <div className="text-xs text-muted-foreground">Across Uganda</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="bg-foreground/5 rounded-2xl p-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">Walen wins #1 for Best Vehicle Tracking & Fleet Management in Uganda</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Recovery Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
