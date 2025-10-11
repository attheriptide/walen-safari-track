import { Button } from "@/components/ui/button";
import { MapPin, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
import logo from "@/assets/walen-logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <img 
          src={heroImage} 
          alt="GPS Tracking Dashboard" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Walen Tracking Solutions Uganda" 
              className="h-24 md:h-32 w-auto animate-fade-in"
            />
          </div>
          
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/30 mb-4">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-white">Trusted by 500+ Ugandan Drivers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Track Every Move.<br />
            <span className="text-secondary">Protect Every Ride.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Real-time GPS tracking and fleet safety for Uganda.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="hero" 
              size="xl"
              className="w-full sm:w-auto animate-pulse-glow"
              onClick={() => window.open('https://wa.me/256778711847?text=Hi!%20I%20want%20to%20track%20my%20car.%20Can%20you%20help?', '_blank')}
            >
              <MapPin className="w-5 h-5" />
              Track My Vehicle Now
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              <Zap className="w-5 h-5" />
              Request a Free Demo
            </Button>
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/80">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-white/80">Recovery Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="hsl(var(--background))" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
