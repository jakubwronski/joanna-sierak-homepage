'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function AnimateOnScroll({ children, className = '' }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.1,  // Trigger when even 10% of element is in view
    margin: "0px 0px -100px 0px"  // Reduced threshold
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 20
      }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 
