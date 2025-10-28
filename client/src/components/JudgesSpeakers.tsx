import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Linkedin, Twitter, ExternalLink } from 'lucide-react';

export default function JudgesSpeakers() {
  const judges = [
    {
      name: "Nandita Pradhan",
      title: "Dean Academic",
      company: "UGI Institution",
      expertise: "EC",
      bio: "30 year experience at UGI institution",
      initials: "NP"
    },
    // {
    //   name: "Marcus Rodriguez",
    //   title: "Senior Principal Engineer",
    //   company: "Microsoft",
    //   expertise: "Full-Stack Development, DevOps",
    //   bio: "Open source contributor and hackathon veteran",
    //   initials: "MR"
    // },
    // {
    //   name: "Dr. Amara Okafor",
    //   title: "Head of Innovation",
    //   company: "Meta Reality Labs",
    //   expertise: "VR/AR, Computer Vision",
    //   bio: "PhD in Computer Science, 20+ patents in emerging tech",
    //   initials: "AO"
    // },
    // {
    //   name: "Jason Kim",
    //   title: "Founding Partner",
    //   company: "Quantum Capital",
    //   expertise: "Venture Capital, Startups",
    //   bio: "Invested in 50+ successful tech startups",
    //   initials: "JK"
    // }
  ];

  // const speakers = [
  //   {
  //     name: "Alex Thompson",
  //     title: "CEO & Founder",
  //     company: "CodeCraft Solutions",
  //     topic: "Building Scalable Startups",
  //     time: "Day 1, 2:00 PM",
  //     initials: "AT"
  //   },
  //   {
  //     name: "Priya Sharma",
  //     title: "Lead Data Scientist",
  //     company: "OpenAI",
  //     topic: "The Future of AI Development",
  //     time: "Day 1, 4:30 PM",
  //     initials: "PS"
  //   },
  //   {
  //     name: "David Williams",
  //     title: "VP of Engineering",
  //     company: "Stripe",
  //     topic: "Fintech Innovation Trends",
  //     time: "Day 2, 10:00 AM",
  //     initials: "DW"
  //   }
  // ];

  return (
    <section id="judges" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judges Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Expert Judges</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry leaders and technical experts who will evaluate your projects 
              and provide valuable feedback to help you grow.
            </p>
          </div>

          <div className="flex justify-center">
            {judges.map((judge, index) => (
              <Card key={index} className="p-6 bg-card hover-elevate border border-border">
                <div className="text-center">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                      {judge.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-foreground mb-1">{judge.name}</h3>
                  <p className="text-primary font-semibold mb-1">{judge.title}</p>
                  <p className="text-sm text-muted-foreground mb-3">{judge.company}</p>
                  
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {judge.expertise.split(', ').map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{judge.bio}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <button 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`judge-linkedin-${index}`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`judge-twitter-${index}`}
                    >
                      <Twitter className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Speakers Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Keynote <span className="text-secondary">Speakers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from industry pioneers who will share insights, trends, and 
              inspiration to fuel your hackathon journey.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="p-8 bg-card border border-border w-full max-w-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground">Coming soon</h3>
              </div>
            </Card>
          </div>
        </div>

        {/* Judge Criteria */}
        <div className="mt-20 bg-gradient-to-r from-card/50 to-card/30 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Judging Criteria
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { label: "Innovation", weight: "25%" },
              { label: "Technical Execution", weight: "25%" },
              { label: "Design & UX", weight: "20%" },
              { label: "Business Viability", weight: "15%" },
              { label: "Presentation", weight: "15%" }
            ].map((criterion, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{criterion.weight}</div>
                <div className="text-foreground font-semibold">{criterion.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
