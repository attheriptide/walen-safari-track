import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-95" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Secure Your Vehicle?
          </h2>
          <p className="text-xl text-white/90">
            Join 500+ satisfied customers across Uganda. Start tracking today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="accent" 
              size="xl"
              className="w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/256YOUR_NUMBER?text=Hi!%20I%20want%20to%20track%20my%20car.%20Can%20you%20help?', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 border-white"
              onClick={() => window.location.href = 'tel:+256YOUR_NUMBER'}
            >
              <Phone className="w-5 h-5" />
              Call Us: +256 XXX XXX XXX
            </Button>
          </div>
          
          <p className="text-sm text-white/70 pt-4">
            24/7 support available • Free consultation • Same-day installation in Kampala
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
