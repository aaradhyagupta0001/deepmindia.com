'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './LatestNews.module.css';
import { ScrollReveal } from '@/components/ScrollReveal';

const newsItems = [
  {
    id: 1,
    title: 'Advancing AI Research in Natural Language Processing',
    date: 'October 1, 2025',
    image: 'https://picsum.photos/400/300?random=1',
    excerpt: 'Exploring breakthrough developments in NLP and their impact on human-AI interaction.',
    link: '/blog/advancing-ai-research'
  },
  {
    id: 2,
    title: 'The Future of Machine Learning in Healthcare',
    date: 'September 28, 2025',
    image: 'https://picsum.photos/400/300?random=2',
    excerpt: 'How machine learning is revolutionizing medical diagnosis and patient care.',
    link: '/blog/ml-in-healthcare'
  },
  {
    id: 3,
    title: 'Ethical AI: Building Responsible Systems',
    date: 'September 25, 2025',
    image: 'https://picsum.photos/400/300?random=3',
    excerpt: 'Discussing the importance of ethics and responsibility in AI development.',
    link: '/blog/ethical-ai'
  }
];

export default function LatestNews() {
  return (
    <section className={styles.section} id="blog">
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <h2 className={styles.title}>
              <span className="gradient-text">Latest News</span>
            </h2>
            <p className={styles.subtitle}>
              Stay updated with our latest research, insights, and breakthroughs in AI technology.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {newsItems.map((item) => (
            <ScrollReveal key={item.id}>
              <motion.article
                className={styles.card}
                whileHover={{ y: -5 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className={styles.image}
                />
                <div className={styles.content}>
                  <p className={styles.date}>{item.date}</p>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.excerpt}>{item.excerpt}</p>
                  <a href={item.link} className={styles.link}>
                    Read More
                    <span className={styles.arrow}>→</span>
                  </a>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}