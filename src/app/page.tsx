import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Globe from '@/components/Globe';
import WhatWeDo from '@/components/WhatWeDo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <div style={{ position: 'relative' }}>
          <Hero />
          <Globe />
        </div>
        <WhatWeDo />
      </main>
      <Footer />
    </>
  );
}
