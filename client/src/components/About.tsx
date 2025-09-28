import { Card } from '@/components/ui/card';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Code,
      title: "Innovation Challenge",
      description: "Push the boundaries of technology with cutting-edge solutions"
    },
    {
      icon: Users,
      title: "Collaborative Environment", 
      description: "Work with talented developers, designers, and entrepreneurs"
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description: "Tackle real-world challenges with innovative approaches"
    },
    {
      icon: Zap,
      title: "Fast-Paced Development",
      description: "Rapid prototyping and development in just 48 hours"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">UHACK 4.0</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            UHACK 4.0 is the ultimate hackathon experience where passionate developers, 
            designers, and innovators come together to create groundbreaking solutions 
            that shape the future of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              What Makes UHACK Special?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              UHACK 4.0 isn't just another hackathon. It's a platform where creativity 
              meets technology, where ambitious ideas transform into reality, and where 
              the next generation of tech leaders are born.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a seasoned developer or just starting your coding journey, 
              UHACK provides the perfect environment to learn, grow, and create something extraordinary.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">48 hours of non-stop innovation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">Mentorship from industry experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Networking opportunities with top companies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Substantial prizes and recognition</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Code</h4>
                    <p className="text-sm text-muted-foreground">Build innovative solutions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Create</h4>
                    <p className="text-sm text-muted-foreground">Turn ideas into reality</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Compete</h4>
                    <p className="text-sm text-muted-foreground">Win amazing prizes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card hover-elevate border border-border">
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}