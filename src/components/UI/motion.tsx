"use client";
import { useAnimation, useInView, motion, Variants } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants: Variants;
}

export const Motion: React.FC<Props> = ({
  children,
  className,
  delay = 0,
  variants,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};
