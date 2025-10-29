import { motion, Variants } from "framer-motion";
import { container } from "@/lib/motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  once?: boolean;
  amount?: number;
}

export default function MotionWrapper({
  children,
  className = "",
  variants = container,
  once = true,
  amount = 0.3,
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
