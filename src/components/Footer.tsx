import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Walen Tracking</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Uganda's trusted GPS vehicle tracking and fleet management solution.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/WalenTrackingSolutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-muted hover:bg-primary flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://twitter.com/WalenTrackingSolutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-muted hover:bg-primary flex items-center justify-center transition-colors group"
              >
                <FaXTwitter className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.tiktok.com/@walentrackingsolutions_ug" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-muted hover:bg-primary flex items-center justify-center transition-colors group"
              >
                <SiTiktok className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#audience" className="text-muted-foreground hover:text-primary transition-colors">Solutions</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#safety" className="text-muted-foreground hover:text-primary transition-colors">Safety Tips</a></li>
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
            © 2025 Walen Tracking Solutions Uganda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
