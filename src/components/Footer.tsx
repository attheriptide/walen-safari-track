import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Walen Tracking Solutions Uganda</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Smart Tracking for Uganda's Roads
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary/20 hover:bg-primary flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary/20 hover:bg-primary flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a 
                href="https://wa.me/256778711847" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary/20 hover:bg-primary flex items-center justify-center transition-colors group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">Solutions</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-lg">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">GPS Tracking</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Fleet Management</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Car Security</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Theft Recovery</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <div className="text-muted-foreground space-y-1">
                  <div>0778711847</div>
                  <div>0754135470</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">info@walentracking.ug</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Walen Tracking Solutions Uganda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
