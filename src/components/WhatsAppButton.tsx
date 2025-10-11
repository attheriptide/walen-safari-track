import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="accent"
        size="lg"
        className="rounded-full w-16 h-16 shadow-2xl animate-pulse-glow"
        onClick={() => window.open('https://wa.me/256778711847?text=Hi!%20I%20want%20to%20track%20my%20car.%20Can%20you%20help?', '_blank')}
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;
