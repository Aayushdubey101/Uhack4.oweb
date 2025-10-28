import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award, Star } from 'lucide-react';

export default function Prizes() {
  const prizeCategories = [
    {
      icon: Trophy,
      title: "Grand Prize",
      amount: "₹100000",
      description: "Overall best project across all categories",
      color: "text-yellow-400",
      bgColor: "from-yellow-400/20 to-orange-400/20",
      borderColor: "border-yellow-400/30"
    },
    {
      icon: Medal,
      title: "Runner Up", 
      amount: "₹50000",
      description: "Second place overall winner",
      color: "text-gray-300",
      bgColor: "from-gray-300/20 to-gray-400/20",
      borderColor: "border-gray-300/30"
    },
    {
      icon: Award,
      title: "Third Place",
      amount: "₹20000", 
      description: "Third place overall winner",
      color: "text-orange-400",
      bgColor: "from-orange-400/20 to-red-400/20",
      borderColor: "border-orange-400/30"
    }
  ];

  const specialPrizes = [
    {
      title: "Best UI/UX Design",
      amount: "₹1000",
      description: "Most innovative and user-friendly interface"
    },
    {
      title: "Best AI Implementation",
      amount: "₹1000", 
      description: "Most creative use of artificial intelligence"
    },
    {
      title: "Best Social Impact",
      amount: "₹1000",
      description: "Solution with greatest potential for social good"
    },
    {
      title: "People's Choice",
      // amount: "$2,000",
      description: "Voted by event participants and audience"
    },
    {
      title: "Best Beginner Team",
      // amount: "$2,000",
      description: "Outstanding project by first-time hackathon participants"
    },
    {
      title: "Most Creative Solution",
      // amount: "$2,000", 
      description: "Most innovative approach to problem solving"
    }
  ];

  return (
    <section id="prizes" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Win Big at <span className="text-primary">UHACK 4.0</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compete for over $50,000 in prizes! From grand prizes to special category awards,
            there are multiple opportunities to win and get recognized for your innovation.
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizeCategories.map((prize, index) => (
            <Card 
              key={index} 
              className={`p-8 text-center bg-gradient-to-br ${prize.bgColor} border ${prize.borderColor} hover-elevate`}
            >
              <div className="mb-6">
                <prize.icon className={`h-16 w-16 ${prize.color} mx-auto mb-4`} />
                <Badge variant="outline" className="mb-4">
                  {index === 0 ? '1st Place' : index === 1 ? '2nd Place' : '3rd Place'}
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{prize.title}</h3>
              <div className={`text-4xl font-black ${prize.color} mb-4`}>{prize.amount}</div>
              <p className="text-muted-foreground">{prize.description}</p>
            </Card>
          ))}
        </div>

        {/* Special Category Prizes */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">
            Special Category Awards
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialPrizes.map((prize, index) => (
              <Card key={index} className="p-6 bg-card hover-elevate border border-border">
                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{prize.title}</h4>
                    <div className="text-2xl font-bold text-primary mb-2">{prize.amount}</div>
                    <p className="text-sm text-muted-foreground">{prize.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">
            Beyond Cash Prizes
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1:1</div>
              <div className="text-foreground font-semibold mb-2">Mentorship Sessions</div>
              <div className="text-sm text-muted-foreground">With industry experts and VCs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">Job</div>
              <div className="text-foreground font-semibold mb-2">Interview Opportunities</div>
              <div className="text-sm text-muted-foreground">With top tech companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">Free</div>
              <div className="text-foreground font-semibold mb-2">Swag & Goodies</div>
              <div className="text-sm text-muted-foreground">T-shirts, stickers, and more!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}