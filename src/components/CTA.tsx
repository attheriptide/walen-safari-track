import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Ready to Track Smarter?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Let's help you protect and manage your vehicles with real-time tracking built for Uganda.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="https://wa.me/256778711847"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 h-12 text-lg bg-background text-foreground hover:bg-background/90 rounded-lg font-medium shadow-xl transition-colors"
            >
              Request a Demo
            </a>
            <a 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 h-12 text-lg bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
