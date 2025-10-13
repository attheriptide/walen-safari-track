import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Ready to Secure Your Vehicle?
            </h2>
            <p className="text-2xl text-white/90 max-w-2xl mx-auto">
              Join 500+ satisfied customers across Uganda. Start tracking today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button 
              size="lg"
              className="w-full sm:w-auto px-10 h-14 text-lg bg-white text-primary hover:bg-white/90 shadow-xl"
              onClick={() => window.open('https://wa.me/256778711847?text=Hi!%20I%20want%20to%20track%20my%20car.%20Can%20you%20help?', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto px-10 h-14 text-lg bg-transparent border-2 border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = 'tel:+256778711847'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: 0778711847
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-sm font-medium">24/7 support available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-sm font-medium">Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-sm font-medium">Same-day installation in Kampala</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
