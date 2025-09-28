import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, MapPin, Users, Code, Trophy, Coffee, Presentation } from 'lucide-react';

export default function Timeline() {
  const timelineEvents = [
    {
      day: "Pre-Event",
      date: "March 15, 2024",
      events: [
        {
          time: "9:00 AM",
          title: "Registration Opens",
          description: "Team registration and check-in begins",
          icon: Users,
          type: "registration"
        },
        {
          time: "10:00 AM", 
          title: "Opening Ceremony",
          description: "Welcome address and event kickoff",
          icon: Calendar,
          type: "ceremony"
        },
        {
          time: "11:00 AM",
          title: "Team Formation",
          description: "Find your teammates and finalize teams",
          icon: Users,
          type: "networking"
        }
      ]
    },
    {
      day: "Day 1",
      date: "March 16, 2024", 
      events: [
        {
          time: "12:00 PM",
          title: "Hackathon Begins!",
          description: "Start coding and building your project",
          icon: Code,
          type: "coding"
        },
        {
          time: "2:00 PM",
          title: "Keynote: Building Scalable Startups",
          description: "Speaker: Alex Thompson (CodeCraft Solutions)",
          icon: Presentation,
          type: "talk"
        },
        {
          time: "4:30 PM",
          title: "Workshop: AI Development",
          description: "Speaker: Priya Sharma (OpenAI)",
          icon: Presentation,
          type: "workshop"
        },
        {
          time: "7:00 PM",
          title: "Dinner & Networking",
          description: "Fuel up and connect with other teams",
          icon: Coffee,
          type: "break"
        },
        {
          time: "11:59 PM",
          title: "Midnight Check-in",
          description: "Progress updates and late-night snacks",
          icon: Clock,
          type: "checkpoint"
        }
      ]
    },
    {
      day: "Day 2", 
      date: "March 17, 2024",
      events: [
        {
          time: "8:00 AM",
          title: "Breakfast & Coffee",
          description: "Start the day with energy",
          icon: Coffee,
          type: "break"
        },
        {
          time: "10:00 AM",
          title: "Fintech Innovation Talk",
          description: "Speaker: David Williams (Stripe)",
          icon: Presentation,
          type: "talk"
        },
        {
          time: "12:00 PM",
          title: "Submission Deadline",
          description: "Final project submissions due",
          icon: Code,
          type: "deadline"
        },
        {
          time: "1:00 PM",
          title: "Lunch Break",
          description: "Recharge before presentations",
          icon: Coffee,
          type: "break"
        },
        {
          time: "2:30 PM",
          title: "Project Presentations",
          description: "Teams present their solutions to judges",
          icon: Presentation,
          type: "presentation"
        },
        {
          time: "5:00 PM",
          title: "Awards Ceremony",
          description: "Winner announcements and prize distribution",
          icon: Trophy,
          type: "awards"
        }
      ]
    }
  ];

  const getEventColor = (type: string) => {
    const colors = {
      registration: "text-blue-400",
      ceremony: "text-purple-400",
      networking: "text-green-400", 
      coding: "text-primary",
      talk: "text-secondary",
      workshop: "text-accent",
      break: "text-orange-400",
      checkpoint: "text-yellow-400",
      deadline: "text-red-400",
      presentation: "text-pink-400",
      awards: "text-yellow-400"
    };
    return colors[type as keyof typeof colors] || "text-foreground";
  };

  const getBadgeVariant = (type: string) => {
    const variants = {
      registration: "default",
      ceremony: "secondary", 
      networking: "outline",
      coding: "default",
      talk: "secondary",
      workshop: "outline",
      break: "secondary",
      checkpoint: "outline",
      deadline: "destructive", 
      presentation: "secondary",
      awards: "default"
    };
    return variants[type as keyof typeof variants] || "default";
  };

  return (
    <section id="timeline" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Event <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A detailed schedule of all activities, workshops, and key moments 
            during the 48-hour hackathon experience.
          </p>
        </div>

        <div className="space-y-12">
          {timelineEvents.map((day, dayIndex) => (
            <div key={dayIndex} className="relative">
              {/* Day Header */}
              <div className="flex items-center mb-8">
                <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-xl">
                  {day.day}
                </div>
                <div className="ml-4 text-muted-foreground font-semibold">
                  {day.date}
                </div>
                <div className="flex-1 h-px bg-border ml-6"></div>
              </div>

              {/* Timeline Events */}
              <div className="grid gap-6">
                {day.events.map((event, eventIndex) => (
                  <Card key={eventIndex} className="p-6 bg-card hover-elevate border border-border">
                    <div className="flex items-start space-x-4">
                      {/* Time */}
                      <div className="flex-shrink-0">
                        <Badge variant="outline" className="font-mono">
                          {event.time}
                        </Badge>
                      </div>

                      {/* Icon */}
                      <div className={`flex-shrink-0 ${getEventColor(event.type)}`}>
                        <event.icon className="h-6 w-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {event.title}
                          </h3>
                          <Badge 
                            variant={getBadgeVariant(event.type) as any}
                            className="ml-4"
                          >
                            {event.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Connecting Line (except for last day) */}
              {dayIndex < timelineEvents.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-px h-8 bg-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">
              Tech Innovation Hub<br />
              123 Silicon Valley Drive<br />
              San Francisco, CA
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <Clock className="h-8 w-8 text-secondary mb-4" />
            <h3 className="font-bold text-foreground mb-2">Duration</h3>
            <p className="text-muted-foreground">
              48 Hours of Non-Stop<br />
              Coding and Innovation<br />
              March 16-17, 2024
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <Coffee className="h-8 w-8 text-accent mb-4" />
            <h3 className="font-bold text-foreground mb-2">What's Included</h3>
            <p className="text-muted-foreground">
              All meals, snacks, drinks<br />
              Unlimited coffee & energy<br />
              Swag and prizes
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}