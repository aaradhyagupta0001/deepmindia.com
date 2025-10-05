import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DeepMind India',
  description: 'Learn how DeepMind India collects, uses, and protects your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Privacy Policy</h1>
      <p><em>Last updated: October 6, 2025</em></p>

      <p>This Privacy Policy describes how DeepMind India (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your information when you use our website and services.</p>

      <h2>Information We Collect</h2>
      <p>We may collect personal information such as your name, email address, and contact details when you submit forms or contact us.</p>

      <h2>How We Use Your Information</h2>
      <p>We use your information to respond to inquiries, provide services, and improve our website.</p>

      <h2>Data Protection</h2>
      <p>We implement appropriate security measures to protect your personal information against unauthorized access.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at privacy@deepmindia.com.</p>
    </div>
  );
}