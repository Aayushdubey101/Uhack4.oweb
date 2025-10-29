"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import MotionWrapper from "@/components/MotionWrapper";
import { fadeUp, cardVariants } from "@/lib/motion";

export default function Problems() {
  return (
    <section id="problems" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="text-center mb-16">
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Problems
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the challenges that await you in UHACK 4.0.
            </p>
          </motion.div>
        </MotionWrapper>

        <MotionWrapper className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Problem 1",
              description: "Description of the first problem statement."
            },
            {
              title: "Problem 2",
              description: "Description of the second problem statement."
            },
            {
              title: "Problem 3",
              description: "Description of the third problem statement."
            }
          ].map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="p-6 bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
