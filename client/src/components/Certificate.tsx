"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import MotionWrapper from "@/components/MotionWrapper";
import { fadeUp, cardVariants } from "@/lib/motion";
import { Award } from "lucide-react";

export default function Certificate() {
  return (
    <section id="certificate" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="text-center mb-16">
          <motion.div variants={fadeUp}>
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Certificates
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Earn recognition for your participation and achievements in UHACK 4.0.
            </p>
          </motion.div>
        </MotionWrapper>

        <MotionWrapper className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Award,
              color: "text-primary",
              title: "Participation Certificate",
              description: "Awarded to all participants who complete the hackathon."
            },
            {
              icon: Award,
              color: "text-secondary",
              title: "Winner Certificate",
              description: "For teams that secure top positions in the competition."
            },
            {
              icon: Award,
              color: "text-accent",
              title: "Special Mention",
              description: "For outstanding projects and innovative solutions."
            }
          ].map((certificate, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="p-6 bg-card border border-border text-center">
                <certificate.icon className={`h-12 w-12 ${certificate.color} mx-auto mb-4`} />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {certificate.title}
                </h3>
                <p className="text-muted-foreground">
                  {certificate.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
