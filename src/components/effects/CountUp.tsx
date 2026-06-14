"use client";

import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Animated number counter that triggers on scroll viewport enter.
 * Uses spring physics for a natural acceleration/deceleration.
 */
export default function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration,
  className,
  style,
}: CountUpProps) {
  const count = useMotionValue(0);
  const springCount = useSpring(count, {
    stiffness: duration ? 100 / (duration / 0.5) : 40,
    damping: duration ? 30 : 20,
  });
  const display = useTransform(springCount, (v) => `${prefix}${Math.round(v)}${suffix}`);

  return (
    <motion.span
      className={className}
      style={style}
      onViewportEnter={() => count.set(target)}
      viewport={{ once: true }}
    >
      <motion.span>{display}</motion.span>
    </motion.span>
  );
}
