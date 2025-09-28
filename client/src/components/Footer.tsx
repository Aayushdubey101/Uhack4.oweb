import { Button } from '@/components/ui/button';
import { Code, Mail, MapPin, Calendar, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Judges', href: '#judges' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'FAQ', href: '#faq' }
  ];

  const resources = [
    { name: 'Registration', href: '#' },
    { name: 'Rules & Guidelines', href: '#' },
    { name: 'Code of Conduct', href: '#' },
    { name: 'Sponsor Packages', href: '#' },
    { name: 'Past Events', href: '#' },
    { name: 'Press Kit', href: '#' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Code className="h-8 w-8 text-primary" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    UHACK 4.0
                  </span>
                  <span className="text-sm text-muted-foreground">by Quantum Minds</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Join the ultimate 48-hour coding challenge where innovation meets creativity. 
                Build the future, one line of code at a time.
              </p>
              
              {/* Event Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>March 16-17, 2024</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Tech Innovation Hub, San Francisco</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>hello@uhack4.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="p-2"
                  data-testid="footer-twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button 
                  size="sm"
                  variant="ghost" 
                  className="p-2"
                  data-testid="footer-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  size="sm"
                  variant="ghost"
                  className="p-2"
                  data-testid="footer-instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button 
                  size="sm"
                  variant="ghost"
                  className="p-2"
                  data-testid="footer-github"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`footer-link-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <button
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`footer-resource-${resource.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {resource.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border py-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest updates about UHACK 4.0 and future events.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-background border border-input rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                data-testid="newsletter-email"
              />
              <Button size="sm" data-testid="newsletter-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} UHACK 4.0 by Quantum Minds. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Code of Conduct
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-full hover-elevate shadow-lg"
        data-testid="back-to-top"
      >
        <Code className="h-6 w-6" />
      </button>
    </footer>
  );
}