import { Shield, Users, Smartphone, Radio, Lock, DollarSign, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Radio,
    title: "We Understand the Ugandan Road Reality",
    text: "Our systems are built and tested for Uganda's conditions — from city traffic to upcountry routes. We know your challenges and design for reliability."
  },
  {
    icon: Users,
    title: "Real People, Real Support",
    text: "You'll always reach a real person. We support you through WhatsApp, calls, and on-site service to make sure your tracking never stops working."
  },
  {
    icon: Smartphone,
    title: "Smart Technology Made Simple",
    text: "Our mobile app is intuitive and easy to use. We handle the setup — you just log in and manage everything from your phone."
  },
  {
    icon: Shield,
    title: "Reliable Hardware and Data Accuracy",
    text: "We use tested GPS and IoT devices that deliver precise, real-time data — so you can trust what you see."
  },
  {
    icon: Lock,
    title: "Secure and Privacy-Focused",
    text: "Your data stays yours. We use secure, encrypted systems hosted on trusted servers."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing, No Hidden Fees",
    text: "Pay only for what you need. No hidden charges, no surprises — just clear, honest plans."
  },
  {
    icon: TrendingUp,
    title: "Proven Results for Businesses and Individuals",
    text: "Clients across Uganda have reduced fuel costs, recovered stolen vehicles, and improved driver performance with Walen Safari Track."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than just a tracking company — we're your partner in vehicle security and fleet efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
