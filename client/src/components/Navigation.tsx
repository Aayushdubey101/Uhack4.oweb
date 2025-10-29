import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code } from 'lucide-react';


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Problems', id: 'problems' },
    // { name: 'Prizes', id: 'prizes' },
    { name: 'Timeline', id: 'timeline' },
    { name: 'Sponsors', id: 'sponsors' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Team', id: 'team' },
    { name: 'Certificate', id: 'certificate' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                UHACK 4.0
              </span>
              <span className="text-xs text-muted-foreground">by Quantum Minds</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                data-testid={`nav-${item.id}`}
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="default"
              className="ml-4"
              data-testid="nav-register"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdocC2sMdROytFHS_tOiY8dqloNWHNEwV5UWNBqsODfmPOM6g/viewform?usp=publish-editor', '_blank')}
            >
              Register Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                variant="default"
                className="w-full mt-4"
                data-testid="mobile-register"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdocC2sMdROytFHS_tOiY8dqloNWHNEwV5UWNBqsODfmPOM6g/viewform?usp=publish-editor', '_blank')}
              >
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}