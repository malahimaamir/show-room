import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">AutoVista</span>
            </div>
            <p className="text-primary-foreground/80">
              Your premium vehicle rental platform. Drive luxury, comfort, and innovation wherever you go.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="/vehicles" className="block hover:text-accent transition-colors">Browse Vehicles</a>
              <a href="/how-it-works" className="block hover:text-accent transition-colors">How It Works</a>
              <a href="/pricing" className="block hover:text-accent transition-colors">Pricing</a>
              <a href="/about" className="block hover:text-accent transition-colors">About Us</a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="space-y-2">
              <a href="/vehicles?category=luxury" className="block hover:text-accent transition-colors">Luxury Cars</a>
              <a href="/vehicles?category=electric" className="block hover:text-accent transition-colors">Electric Vehicles</a>
              <a href="/vehicles?category=bikes" className="block hover:text-accent transition-colors">Motorcycles</a>
              <a href="/vehicles?category=suv" className="block hover:text-accent transition-colors">SUVs</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>hello@autovista.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>123 Auto Street, Car City, CC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60">
            © 2024 AutoVista. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors">Terms of Service</a>
            <a href="/cookies" className="text-primary-foreground/60 hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}