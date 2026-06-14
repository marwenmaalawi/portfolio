"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  /** Speed multiplier. Positive = moves slower than scroll, negative = moves opposite. Default 0.15 */
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wraps content in a subtle parallax effect driven by scroll position.
 * Uses GPU-accelerated transforms for smooth 60fps performance.
 */
export default function ParallaxSection({
  children,
  speed = 0.15,
  className,
  style,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden", ...style }} className={className}>
      <motion.div style={{ y, willChange: "transform" }}>
        {children}
      </motion.div>
    </div>
  );
}
