"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 280, mass: 0.35 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let ticking = false;
    const moveCursor = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
          if (!isVisible) setIsVisible(true);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isVisible, cursorX, cursorY]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".glow-card-interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="custom-cursor"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          borderRadius: "50%",
          border: "1.5px solid var(--accent-primary)",
          backgroundColor: isHovered ? "rgba(99, 102, 241, 0.05)" : "transparent",
          pointerEvents: "none",
          zIndex: 99999,
          translateX: "-50%",
          translateY: "-50%",
          x: cursorXSpring,
          y: cursorYSpring,
          transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "var(--accent-primary)",
          pointerEvents: "none",
          zIndex: 99999,
          translateX: "-50%",
          translateY: "-50%",
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      {/* Disable browser cursor on desktops only */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (hover: hover) and (pointer: fine) {
              body, a, button, select, input, .glow-card-interactive, [role="button"] {
                cursor: none !important;
              }
            }
          `,
        }}
      />
    </>
  );
}
