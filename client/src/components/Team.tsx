import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Mail, Users, Heart } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';
import { fadeUp, cardVariants } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function Team() {
  const organizers = [
    {
      name: "Arjun Patel",
      role: "Event Director", 
      company: "Quantum Minds",
      bio: "Passionate about building tech communities and fostering innovation",
      initials: "AP",
      color: "bg-primary"
    },
    {
      name: "Sophia Rodriguez",
      role: "Technical Lead",
      company: "Quantum Minds", 
      bio: "Full-stack developer with 8+ years in event tech infrastructure",
      initials: "SR",
      color: "bg-secondary"
    },
    {
      name: "Raj Krishnamurthy", 
      role: "Community Manager",
      company: "Quantum Minds",
      bio: "Building bridges between developers, startups, and industry leaders", 
      initials: "RK",
      color: "bg-accent"
    },
    {
      name: "Emma Chen",
      role: "Sponsorship Director",
      company: "Quantum Minds",
      bio: "Connecting innovative companies with the developer community",
      initials: "EC", 
      color: "bg-primary"
    }
  ];

  const volunteers = [
    {
      name: "Michael Park",
      role: "Registration & Check-in",
      initials: "MP"
    },
    {
      name: "Aisha Johnson", 
      role: "Mentorship Coordinator",
      initials: "AJ"
    },
    {
      name: "Carlos Martinez",
      role: "Technical Support",
      initials: "CM"
    },
    {
      name: "Priya Singh",
      role: "Logistics Manager",
      initials: "PS"
    },
    {
      name: "David Kim",
      role: "Media & Photography", 
      initials: "DK"
    },
    {
      name: "Lisa Wang",
      role: "Food & Catering",
      initials: "LW"
    }
  ];

  return (
    <section id="team" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="text-center mb-16">
          <motion.div variants={fadeUp}>
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet the <span className="text-primary">Organizing Team</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate individuals behind UHACK 4.0 who work tirelessly to create
              an unforgettable hackathon experience for everyone.
            </p>
          </motion.div>
        </MotionWrapper>

        {/* Core Organizers */}
        <MotionWrapper className="mb-20">
          <motion.div variants={fadeUp}>
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">
              Core Organizing Team
            </h3>
          </motion.div>
          <MotionWrapper className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="p-6 bg-card border border-border text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-6">
                    <AvatarFallback className={`${member.color} text-white text-2xl font-bold`}>
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.company}</p>
                  <p className="text-sm text-muted-foreground mb-6">{member.bio}</p>

                  <div className="flex justify-center space-x-3">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="p-2"
                      data-testid={`team-linkedin-${index}`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="p-2"
                      data-testid={`team-twitter-${index}`}
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="p-2"
                      data-testid={`team-email-${index}`}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </MotionWrapper>
        </MotionWrapper>

        {/* Volunteers Section */}
        <MotionWrapper className="mb-16">
          <motion.div variants={fadeUp}>
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">
              Amazing Volunteers
            </h3>
          </motion.div>
          <MotionWrapper className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteers.map((volunteer, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="p-6 bg-card border border-border">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-muted text-foreground text-lg font-semibold">
                        {volunteer.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{volunteer.name}</h4>
                      <p className="text-muted-foreground">{volunteer.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </MotionWrapper>
        </MotionWrapper>

        {/* Quantum Minds Section */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 text-center border border-border">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              About Quantum Minds
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Quantum Minds is a student-led technology organization dedicated to fostering 
              innovation, building communities, and empowering the next generation of tech leaders. 
              We organize hackathons, workshops, and tech talks to bridge the gap between 
              academia and industry.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">2000+</div>
                <div className="text-muted-foreground">Community Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Events Organized</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" data-testid="quantum-minds-website">
                Visit Our Website
              </Button>
              <Button variant="outline" size="lg" data-testid="quantum-minds-join">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>

        {/* Volunteer CTA */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-6 w-6 text-red-500" />
            <h3 className="text-2xl font-bold text-foreground">
              Want to Join Our Team?
            </h3>
          </div>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for passionate volunteers to help make UHACK even better. 
            Join our team and be part of creating magical moments for the tech community!
          </p>
          <Button size="lg" data-testid="volunteer-apply-btn">
            Apply to Volunteer
          </Button>
        </div>
      </div>
    </section>
  );
}