'use client';

import { useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal = ({ children, className = '', threshold = 0.1, once = true }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once: once 
  });

  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? 'fade-in visible' : 'fade-in'}`}
      style={{ 
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      {children}
    </div>
  );
};