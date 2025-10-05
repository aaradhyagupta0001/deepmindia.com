'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navigation.module.css';
import mobileStyles from './MobileNav.module.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navLinks = [
    { href: '#about', text: 'About', delay: 0.2 },
    { href: '#services', text: 'Services', delay: 0.3 },
    { href: '#blog', text: 'Blog', delay: 0.4 },
    { href: '#contact', text: 'Contact Us', delay: 0.5, isButton: true }
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.logo}
        >
          DeepMind India
        </motion.div>
        
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: link.delay }}
            >
              <a 
                href={link.href} 
                className={link.isButton ? styles.button : styles.link}
              >
                {link.text}
              </a>
            </motion.div>
          ))}
        </nav>

        <button
          className={`${mobileStyles.mobileMenuButton} ${isMobileMenuOpen ? mobileStyles.open : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={mobileStyles.hamburger} />
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={`${mobileStyles.mobileNav} ${isMobileMenuOpen ? mobileStyles.open : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className={mobileStyles.mobileNavLinks}>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className={link.isButton ? styles.button : styles.link}
                      onClick={closeMobileMenu}
                    >
                      {link.text}
                    </a>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;