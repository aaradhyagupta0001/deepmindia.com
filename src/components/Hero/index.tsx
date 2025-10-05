'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { ScrollReveal } from '@/components/ScrollReveal';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.content}>
        <ScrollReveal>
          <h1 className={styles.title}>
            <span className="gradient-text">Transforming</span> the Future<br />
            with Advanced AI
          </h1>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className={styles.subtitle}>
            Pioneering AI solutions that drive innovation and create meaningful impact
            for businesses and society.
          </p>
        </ScrollReveal>
        
        <ScrollReveal>
          <motion.a
            href="#contact"
            className={styles.cta}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;