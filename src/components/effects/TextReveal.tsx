"use client";

import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  /** If true, reveals on scroll into viewport. Otherwise animates on mount. */
  onScroll?: boolean;
}

/**
 * Word-by-word text reveal with a subtle vertical slide + blur clear.
 * Each word fades in sequentially with a micro stagger.
 */
export default function TextReveal({
  text,
  as: Tag = "h2",
  className,
  style,
  delay = 0,
  onScroll = true,
}: TextRevealProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 12,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const animateProps = onScroll
    ? { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-60px" } }
    : { initial: "hidden", animate: "visible" };

  return (
    <motion.div
      variants={containerVariants}
      {...(animateProps as any)}
      style={{ display: "flex", flexWrap: "wrap", gap: "0 0.3em", ...style }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          style={{
            display: "inline-block",
            willChange: "transform, opacity, filter",
          }}
        >
          <Tag style={{ margin: 0, fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit", color: "inherit", display: "inline" }}>
            {word}
          </Tag>
        </motion.span>
      ))}
    </motion.div>
  );
}
