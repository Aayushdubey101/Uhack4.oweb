import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, Play, Award, Users, Code, Zap } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';
import { fadeUp, cardVariants } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'coding', label: 'Coding Sessions' },
    { id: 'presentations', label: 'Presentations' },
    { id: 'networking', label: 'Networking' },
    { id: 'awards', label: 'Awards' }
  ];

  // Mock gallery data - in real app, these would be actual images
  const galleryItems = [
    {
      id: 1,
      title: "Opening Ceremony",
      category: "presentations", 
      type: "image",
      description: "Participants gathering for the opening ceremony"
    },
    {
      id: 2,
      title: "Team Formation",
      category: "networking",
      type: "image", 
      description: "Participants forming teams and networking"
    },
    {
      id: 3,
      title: "Late Night Coding",
      category: "coding",
      type: "image",
      description: "Teams working through the night on their projects"
    },
    {
      id: 4,
      title: "Mentorship Session",
      category: "networking",
      type: "image",
      description: "Industry mentors helping teams with their projects"
    },
    {
      id: 5,
      title: "Project Demo",
      category: "presentations",
      type: "video",
      description: "Team presenting their innovative solution"
    },
    {
      id: 6,
      title: "Winner Announcement",
      category: "awards",
      type: "image",
      description: "Winners celebrating with their trophies"
    },
    {
      id: 7,
      title: "Collaborative Workspace",
      category: "coding",
      type: "image", 
      description: "Teams collaborating in the main hacking area"
    },
    {
      id: 8,
      title: "Keynote Speech",
      category: "presentations",
      type: "video",
      description: "Industry leader sharing insights with participants"
    },
    {
      id: 9,
      title: "Award Ceremony",
      category: "awards", 
      type: "image",
      description: "Final award ceremony with all winners"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    const icons = {
      coding: Code,
      presentations: Camera,
      networking: Users,
      awards: Award
    };
    return icons[category as keyof typeof icons] || Camera;
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="text-center mb-16">
          <motion.div variants={fadeUp}>
            <Camera className="h-16 w-16 text-primary mx-auto mb-6" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Event <span className="text-primary">Gallery</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a look at the amazing moments, innovative projects, and vibrant
              community from previous UHACK events.
            </p>
          </motion.div>
        </MotionWrapper>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center space-x-2"
              data-testid={`gallery-filter-${category.id}`}
            >
              {category.id !== 'all' && (
                <>
                  {(() => {
                    const Icon = getCategoryIcon(category.id);
                    return <Icon className="h-4 w-4" />;
                  })()}
                </>
              )}
              <span>{category.label}</span>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <MotionWrapper className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card
                className="group cursor-pointer overflow-hidden bg-card border border-border"
                data-testid={`gallery-item-${item.id}`}
              >
                {/* Image/Video Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <div className="text-center">
                      <Play className="h-16 w-16 text-white/80 mx-auto mb-2" />
                      <Badge variant="secondary">Video</Badge>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Camera className="h-16 w-16 text-white/80 mx-auto mb-2" />
                      <Badge variant="outline">Photo</Badge>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white">
                      {item.type === 'video' ? (
                        <Play className="h-12 w-12 mx-auto mb-2" />
                      ) : (
                        <Zap className="h-12 w-12 mx-auto mb-2" />
                      )}
                      <p className="text-sm">Click to {item.type === 'video' ? 'play' : 'view'}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {categories.find(cat => cat.id === item.category)?.label}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </MotionWrapper>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-card/50 to-card/30 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            UHACK 3.0 Highlights
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">450+</div>
              <div className="text-muted-foreground">Participants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">75</div>
              <div className="text-muted-foreground">Projects Submitted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">48</div>
              <div className="text-muted-foreground">Hours of Innovation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Prize Categories</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Want to be part of the next amazing gallery?
          </p>
          <Button size="lg" data-testid="gallery-register-btn">
            Register for UHACK 4.0
          </Button>
        </div>
      </div>
    </section>
  );
}