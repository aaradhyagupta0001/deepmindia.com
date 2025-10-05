'use client';

import { motion } from 'framer-motion';
import styles from './WhatWeDo.module.css';

const services = [
  {
    icon: '🧠',
    title: 'Machine Learning',
    description: 'Cutting-edge ML solutions that adapt and learn from data, providing intelligent insights and automation.'
  },
  {
    icon: '🤖',
    title: 'AI Development',
    description: 'Custom AI solutions designed to solve complex problems and drive innovation in your business.'
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics capabilities.'
  },
  {
    icon: '🔗',
    title: 'Deep Learning',
    description: 'Sophisticated neural networks that can handle complex pattern recognition and decision-making tasks.'
  },
  {
    icon: '🎯',
    title: 'Computer Vision',
    description: 'Advanced image and video processing solutions for real-world applications.'
  },
  {
    icon: '💡',
    title: 'Natural Language Processing',
    description: 'Intelligent text analysis and processing for human-like language understanding.'
  }
];

const WhatWeDo = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>
            <span className="gradient-text">What We Do</span>
          </h2>
          <p className={styles.subtitle}>
            Leveraging cutting-edge AI technology to solve complex problems and drive innovation
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
            >
              <div className={styles.cardIcon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;