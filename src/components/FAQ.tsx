import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "General Vehicle Tracking",
    questions: [
      {
        q: "What is GPS vehicle tracking?",
        a: "It's a system that lets you see your vehicle's location in real time using satellite signals. You can monitor it from your phone or computer, anytime."
      },
      {
        q: "Will it work if my car is turned off?",
        a: "Yes. Our system uses backup power and smart sensors to keep tracking even when the engine is off."
      },
      {
        q: "Can I recover my stolen car with this?",
        a: "Absolutely. Our remote engine cut-off and location tracking help you and authorities recover stolen vehicles faster."
      }
    ]
  },
  {
    category: "For Boda Riders",
    questions: [
      {
        q: "Can I track my motorcycle in real time?",
        a: "Yes. Our GPS trackers are designed for boda bodas and give you live updates on location and movement."
      },
      {
        q: "What if my rider turns off their phone?",
        a: "Tracking works independently of the rider's phone. You'll still see location updates through our dashboard."
      }
    ]
  },
  {
    category: "For Businesses & Fleets",
    questions: [
      {
        q: "How many vehicles can I manage?",
        a: "You can manage as many as you need — from 2 to 200+. Our dashboard scales with your fleet."
      },
      {
        q: "Can I monitor fuel usage and driver behavior?",
        a: "Yes. We offer fuel tracking, route optimization, and video telematics to help you manage costs and safety."
      }
    ]
  },
  {
    category: "Security & Safety",
    questions: [
      {
        q: "Is my tracking data private?",
        a: "Yes. Your data is encrypted and only accessible to authorized users. We take privacy seriously."
      },
      {
        q: "Can I cut off my engine remotely?",
        a: "Yes. If your vehicle is stolen or misused, you can disable the engine from your dashboard or mobile app."
      }
    ]
  },
  {
    category: "Technology & Support",
    questions: [
      {
        q: "Do you have a mobile app?",
        a: "Yes. Our app works on Android and iOS, giving you full control from your phone."
      },
      {
        q: "What happens if I lose internet or power?",
        a: "Our system stores data locally and syncs when back online. You won't lose tracking history."
      }
    ]
  },
  {
    category: "Pricing & Setup",
    questions: [
      {
        q: "How much does it cost per vehicle?",
        a: "Pricing starts from affordable monthly plans. Contact us for a custom quote based on your needs."
      },
      {
        q: "Do you offer installation and support in Kampala?",
        a: "Yes. We install at your location and offer 24/7 support via WhatsApp, phone, or email."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
            SUPPORT & RESOURCES
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Frequently Asked Questions
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about GPS tracking in Uganda
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full" />
                <h3 className="text-2xl font-bold text-foreground">
                  {category.category}
                </h3>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${categoryIndex}-${index}`}
                    className="border border-border rounded-xl px-8 bg-card hover:border-primary/30 transition-all hover:shadow-[var(--shadow-card)]"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
