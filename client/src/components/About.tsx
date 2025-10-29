"use client";
import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import MotionWrapper from "@/components/MotionWrapper";
import { fadeUp, cardVariants } from "@/lib/motion";

export default function About() {
  const features = [
    {
      icon: Code,
      title: "Innovation Challenge",
      description:
        "Push the boundaries of technology with cutting-edge solutions",
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description:
        "Work with talented developers, designers, and entrepreneurs",
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description:
        "Tackle real-world challenges with innovative approaches",
    },
    {
      icon: Zap,
      title: "Fast-Paced Development",
      description:
        "Rapid prototyping and development in just 48 hours",
    },
  ];

  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionWrapper className="text-center mb-16">
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            <TypeAnimation
              sequence={[
                "About ",
                500,
                "About UHACK 4.0", // full text
              ]}
              speed={60}
              style={{ display: "inline-block" }}
              repeat={0}
              cursor={false}
            />
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            <TypeAnimation
              sequence={[
                "UHACK 4.0 is the ultimate hackathon experience where passionate developers, designers, and innovators come together to create groundbreaking solutions that shape the future of technology.",
              ]}
              speed={40}
              repeat={0}
              cursor={false}
            />
          </motion.p>
        </MotionWrapper>

        {/* Description section */}
        <MotionWrapper className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <motion.h3
              variants={fadeUp}
              className="text-3xl font-bold text-foreground mb-6"
            >
              <TypeAnimation
                sequence={[
                  "What Makes UHACK Special?",
                ]}
                speed={50}
                repeat={0}
                cursor={false}
              />
            </motion.h3>

            <motion.div
              variants={fadeUp}
              className="space-y-6"
            >
              <TypeAnimation
                sequence={[
                  "UHACK 4.0 isn't just another hackathon. It's a platform where creativity meets technology, where ambitious ideas transform into reality, and where the next generation of tech leaders are born.",
                ]}
                speed={40}
                repeat={0}
                cursor={false}
                wrapper="p"
                className="text-lg text-muted-foreground"
              />

              <TypeAnimation
                sequence={[
                  "Whether you're a seasoned developer or just starting your coding journey, UHACK provides the perfect environment to learn, grow, and create something extraordinary.",
                ]}
                speed={40}
                repeat={0}
                cursor={false}
                wrapper="p"
                className="text-lg text-muted-foreground"
              />
            </motion.div>

            {/* Bullet points */}
            <motion.div
              variants={fadeUp}
              className="space-y-4 mt-8"
            >
              {[
                "48 hours of non-stop innovation",
                "Mentorship from industry experts",
                "Networking opportunities with top companies",
                "Substantial prizes and recognition",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="flex items-center space-x-3"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      i % 3 === 0
                        ? "bg-primary"
                        : i % 3 === 1
                        ? "bg-secondary"
                        : "bg-accent"
                    }`}
                  ></div>
                  <span className="text-foreground">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right-side feature card */}
          <motion.div
            variants={fadeUp}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 border border-border shadow-lg">
              <MotionWrapper className="space-y-6">
                {[
                  { icon: Code, label: "Code", desc: "Build innovative solutions" },
                  { icon: Lightbulb, label: "Create", desc: "Turn ideas into reality" },
                  { icon: Zap, label: "Compete", desc: "Win amazing prizes" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.label}
                      </h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </MotionWrapper>
            </div>
          </motion.div>
        </MotionWrapper>

        {/* Features grid */}
        <MotionWrapper className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="p-6 bg-card border border-border">
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
