import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does GPS tracking work?",
    answer: "Our system uses a small GPS device installed in your vehicle to send real-time data to your mobile app or dashboard. You can view location, routes, and status anytime."
  },
  {
    question: "Can I track my car on my phone?",
    answer: "Yes! Our platform is fully mobile-optimized — you can log in via browser or app to see your vehicle live on the map and get alerts instantly."
  },
  {
    question: "What happens if my internet goes off?",
    answer: "No worries. The device keeps recording and updates automatically once the connection is restored, so you never lose data."
  },
  {
    question: "Is the system reliable for upcountry or remote routes?",
    answer: "Yes. Our devices use GPS and GSM networks designed to perform even in low-signal areas."
  },
  {
    question: "Do you offer after-sales support?",
    answer: "Absolutely. We provide full customer support through WhatsApp, phone, and field technicians when needed."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about GPS tracking in Uganda
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-8 bg-card hover:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
