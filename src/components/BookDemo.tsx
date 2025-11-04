import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Phone, Mail, CheckCircle } from "lucide-react";

const BookDemo = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30" id="book-demo">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              See Walen in Action
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a personalized demo and discover how our GPS tracking solutions can protect your vehicles and grow your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Demo Benefits */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-foreground mb-2">Live Dashboard Tour</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">See real-time tracking, alerts, and reports in action on our platform.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-foreground mb-2">Customized Solutions</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">We'll recommend the perfect tracking package for your specific needs.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-foreground mb-2">Ask Anything</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">Get expert answers about pricing, installation, and features.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Options */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="bg-primary text-primary-foreground border-0 shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                      <Calendar className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Book Your Demo Now</h3>
                      <p className="text-sm sm:text-base text-primary-foreground/90">Available within 24 hours • Free consultation</p>
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-background text-foreground hover:bg-background/90 h-11 sm:h-12 text-sm sm:text-base"
                      onClick={() => window.open('https://wa.me/256778711847?text=Hi!%20I%20want%20to%20book%20a%20demo%20of%20your%20GPS%20tracking%20system.', '_blank')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule via WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid sm:grid-cols-2 gap-4">
                <a 
                  href="tel:+256778711847"
                  className="flex items-center justify-center gap-3 p-4 sm:p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all group"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Call us</div>
                    <div className="text-sm sm:text-base font-semibold text-foreground">+256 778 711847</div>
                  </div>
                </a>

                <a 
                  href="/contact"
                  className="flex items-center justify-center gap-3 p-4 sm:p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all group"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Email us</div>
                    <div className="text-sm sm:text-base font-semibold text-foreground">Contact Form</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
