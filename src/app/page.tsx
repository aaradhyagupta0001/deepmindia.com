'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Globe from '@/components/Globe';
import WhatWeDo from '@/components/WhatWeDo';
import Footer from '@/components/Footer';
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
      </main>
      <Footer />
    </>
  );
}
