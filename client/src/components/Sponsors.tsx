import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Award, Trophy } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';
import { fadeUp, cardVariants } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function Sponsors() {
  const sponsorTiers = [
    {
      tier: "Platinum",
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "from-yellow-400/20 to-yellow-600/20",
      borderColor: "border-yellow-400/30",
      sponsors: [
        { name: "TechCorp", description: "Leading cloud computing platform" },
        { name: "InnovateLab", description: "AI and machine learning solutions" }
      ]
    },
    {
      tier: "Gold", 
      icon: Award,
      color: "text-yellow-300",
      bgColor: "from-yellow-300/20 to-orange-400/20", 
      borderColor: "border-yellow-300/30",
      sponsors: [
        { name: "DataFlow", description: "Big data analytics platform" },
        { name: "CloudNext", description: "Next-gen cloud infrastructure" },
        { name: "DevTools Pro", description: "Developer productivity suite" }
      ]
    },
    {
      tier: "Silver",
      icon: Star,
      color: "text-gray-300",
      bgColor: "from-gray-300/20 to-gray-400/20",
      borderColor: "border-gray-300/30", 
      sponsors: [
        { name: "StartupHub", description: "Startup accelerator program" },
        { name: "CodeAcademy", description: "Online coding education" },
        { name: "TechReview", description: "Technology media platform" },
        { name: "OpenSource Inc", description: "Open source community" }
      ]
    }
  ];

  const benefits = [
    {
      tier: "Platinum",
      benefits: [
        "Logo on main stage and all marketing materials",
        "Dedicated booth space and demo area", 
        "Speaking opportunity during opening ceremony",
        "Direct access to participant resumes",
        "Custom workshop or tech talk slot",
        "VIP networking dinner with judges"
      ]
    },
    {
      tier: "Gold",
      benefits: [
        "Logo on event website and banners",
        "Booth space in sponsor area",
        "Access to participant networking sessions", 
        "Recruiting table during event",
        "Social media mentions and features"
      ]
    },
    {
      tier: "Silver", 
      benefits: [
        "Logo on event materials",
        "Small display table",
        "Access to closing ceremony",
        "Event swag inclusion opportunity"
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="text-center mb-16">
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Amazing <span className="text-primary">Sponsors</span>
            </h2>
            <motion.div variants={fadeUp}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                UHACK 4.0 is made possible by our incredible partners who support
                innovation and the next generation of tech leaders.
              </p>
            </motion.div>
          </motion.div>
        </MotionWrapper>

        {/* Sponsor Tiers */}
        <MotionWrapper className="space-y-12 mb-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div key={tierIndex} variants={fadeUp}>
              {/* Tier Header */}
              <div className="flex items-center justify-center mb-8">
                <div className={`flex items-center space-x-3 bg-gradient-to-r ${tier.bgColor} px-6 py-3 rounded-lg border ${tier.borderColor}`}>
                  <tier.icon className={`h-6 w-6 ${tier.color}`} />
                  <span className="text-2xl font-bold text-foreground">{tier.tier} Sponsors</span>
                </div>
              </div>

              {/* Sponsors Grid */}
              <MotionWrapper className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.div
                    key={sponsorIndex}
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <Card className="p-8 bg-card border border-border text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${tier.bgColor} rounded-lg flex items-center justify-center border ${tier.borderColor}`}>
                        <span className="text-2xl font-bold text-foreground">
                          {sponsor.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{sponsor.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{sponsor.description}</p>
                      <Button variant="outline" size="sm" data-testid={`sponsor-${sponsor.name.toLowerCase()}`}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Website
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </MotionWrapper>
            </motion.div>
          ))}
        </MotionWrapper>

        {/* Sponsorship Benefits */}
        <MotionWrapper className="mb-16">
          <motion.div variants={fadeUp}>
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">
              Sponsorship Benefits
            </h3>
          </motion.div>
          <MotionWrapper className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefitTier, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="p-6 bg-card border border-border">
                  <div className="flex items-center space-x-2 mb-6">
                    <Badge variant="default" className="text-lg px-3 py-1">
                      {benefitTier.tier}
                    </Badge>
                  </div>
                  <ul className="space-y-3">
                    {benefitTier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </MotionWrapper>
        </MotionWrapper>

        {/* Become a Sponsor CTA */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 text-center border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Want to Sponsor UHACK 4.0?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our mission to support the next generation of innovators. 
            Partner with us to showcase your brand to 500+ talented developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="sponsor-package-btn">
              View Sponsor Packages
            </Button>
            <Button variant="outline" size="lg" data-testid="sponsor-contact-btn">
              Contact Sponsorship Team
            </Button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Contact our sponsorship team:</p>
            <p className="text-foreground font-semibold">sponsors@uhack4.com</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Participants</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary mb-2">50+</div>
            <div className="text-muted-foreground">Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">100+</div>
            <div className="text-muted-foreground">Universities</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">48</div>
            <div className="text-muted-foreground">Hours</div>
          </div>
        </div>
      </div>
    </section>
  );
}