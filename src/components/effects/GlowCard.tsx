"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  glowColor?: string;
  as?: "div" | "a";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  enableTilt?: boolean;
}

export default function GlowCard({
  children,
  className = "",
  style,
  glowColor = "99, 102, 241",
  as = "div",
  href,
  target,
  rel,
  onClick,
  enableTilt = false,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    
    setMousePos({ x: localX, y: localY });

    if (enableTilt) {
      const width = rect.width;
      const height = rect.height;
      
      const xPct = localX / width - 0.5;
      const yPct = localY / height - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    }
  }, [enableTilt, x, y]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (enableTilt) {
      x.set(0);
      y.set(0);
    }
  };

  const spotlightStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.4s ease",
    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${glowColor}, 0.08), transparent 40%)`,
    pointerEvents: "none",
    zIndex: 0,
  };

  const borderGlowStyle: React.CSSProperties = {
    position: "absolute",
    inset: -1,
    borderRadius: "inherit",
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.4s ease",
    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${glowColor}, 0.25), transparent 40%)`,
    pointerEvents: "none",
    zIndex: -1,
  };

  const cardStyle: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "var(--radius-lg)",
    background: "var(--bg-card)",
    border: "1px solid var(--bg-border)",
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease",
    ...style,
  };

  const content = (
    <>
      <div style={borderGlowStyle} />
      <div style={spotlightStyle} />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </>
  );

  const commonProps = {
    ref: cardRef as any,
    className: `glow-card-interactive ${className}`,
    style: {
      ...cardStyle,
      ...(enableTilt ? { rotateX, rotateY, transformPerspective: 1000 } : {}),
    },
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: handleMouseLeave,
    onClick,
  };

  if (as === "a" && href) {
    return (
      <motion.a
        {...commonProps}
        href={href}
        target={target}
        rel={rel}
        whileHover={{ y: -3, boxShadow: `0 12px 40px rgba(${glowColor}, 0.12)` }}
        style={{ ...commonProps.style, textDecoration: "none", display: "block", willChange: enableTilt ? "transform" : "auto" }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      {...commonProps}
      whileHover={{ y: -2, boxShadow: `0 12px 40px rgba(${glowColor}, 0.1)` }}
      style={{ ...commonProps.style, willChange: enableTilt ? "transform" : "auto" }}
    >
      {content}
    </motion.div>
  );
}
