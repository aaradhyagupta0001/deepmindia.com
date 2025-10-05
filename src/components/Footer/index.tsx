'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>DeepMind India</h3>
            <p className={styles.link}>
              Pioneering AI solutions that drive innovation and create meaningful impact
              for businesses and society.
            </p>
            <div className={styles.social}>
              <a href="https://linkedin.com/company/deepmind-india" className={styles.socialIcon} aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/deepmindindia" className={styles.socialIcon} aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://github.com/ankurdotcom/deepmindia.com" className={styles.socialIcon} aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </motion.div>

          <motion.div
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Solutions</h3>
            <div className={styles.links}>
              <a href="#" className={styles.link}>Machine Learning</a>
              <a href="#" className={styles.link}>AI Development</a>
              <a href="#" className={styles.link}>Data Analytics</a>
              <a href="#" className={styles.link}>Deep Learning</a>
            </div>
          </motion.div>

          <motion.div
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Company</h3>
            <div className={styles.links}>
              <a href="#about" className={styles.link}>About Us</a>
              <a href="#careers" className={styles.link}>Careers</a>
              <a href="#blog" className={styles.link}>Blog</a>
              <a href="#contact" className={styles.link}>Contact</a>
            </div>
          </motion.div>

          <motion.div
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3>Legal</h3>
            <div className={styles.links}>
              <a href="/privacy" className={styles.link}>Privacy Policy</a>
              <a href="/terms" className={styles.link}>Terms of Service</a>
              <a href="#cookies" className={styles.link}>Cookie Policy</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>&copy; {currentYear} DeepMind India. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;