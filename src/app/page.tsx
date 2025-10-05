'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Globe from '@/components/Globe';
import WhatWeDo from '@/components/WhatWeDo';
import LatestNews from '@/components/LatestNews';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Home() {
  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <>
      <Navigation />
      <main>
        <div style={{ position: 'relative' }}>
          <Hero />
          <Globe />
        </div>
        <ScrollReveal>
          <WhatWeDo />
        </ScrollReveal>
        <ScrollReveal>
          <LatestNews />
        </ScrollReveal>
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </main>
      <ThemeToggle />
      <Footer />
    </>
  );
}
