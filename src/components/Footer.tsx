import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-secondary">Walen Tracking</h3>
            <p className="text-sm text-background/70">
              Uganda's trusted GPS vehicle tracking and fleet management solution.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">GPS Tracking</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">Fleet Management</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">Car Security</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">Theft Recovery</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-secondary" />
                <span className="text-background/70">Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-secondary" />
                <span className="text-background/70">+256 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-secondary" />
                <span className="text-background/70">info@walentracking.ug</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2025 Walen Tracking Solutions Uganda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
