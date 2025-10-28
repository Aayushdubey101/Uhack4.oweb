import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Trophy, Users } from 'lucide-react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set hackathon date to 30 days from now
    const hackathonDate = new Date();
    hackathonDate.setDate(hackathonDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/30 rounded-lg rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-secondary/30 rounded-lg rotate-12"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 border border-accent/30 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-primary/30 rounded-lg rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              UHACK 4.0
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Presented by
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Quantum Minds
          </h2>
        </div>

       
        {/* Countdown Timer */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Event Starts In</h3>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-4 border border-border">
                <div className="text-3xl font-bold text-primary">{item.value.toString().padStart(2, '0')}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3" data-testid="hero-register">
            Register Now
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3" data-testid="hero-learn-more">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}