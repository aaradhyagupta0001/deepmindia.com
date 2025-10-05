import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | DeepMind India',
  description: 'Read the terms and conditions for using DeepMind India\'s services.',
};

export default function TermsOfService() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Terms of Service</h1>
      <p><em>Last updated: October 5, 2025</em></p>

      <p>These Terms of Service (&quot;Terms&quot;) govern your use of the DeepMind India website and services.</p>

      <h2>Acceptance of Terms</h2>
      <p>By accessing our website, you agree to be bound by these Terms.</p>

      <h2>Use of Services</h2>
      <p>You agree to use our services only for lawful purposes and in accordance with these Terms.</p>

      <h2>Intellectual Property</h2>
      <p>All content on this website is owned by DeepMind India and protected by copyright laws.</p>

      <h2>Limitation of Liability</h2>
      <p>DeepMind India shall not be liable for any indirect, incidental, or consequential damages.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at legal@deepmindia.com.</p>
    </div>
  );
}