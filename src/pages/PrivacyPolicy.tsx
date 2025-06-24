import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
            Privacy Policy
          </h1>
          <p className="text-foreground/60">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card className="glass-card">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-foreground/80 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                <li>Name and contact information</li>
                <li>Company details and business requirements</li>
                <li>Communication preferences</li>
                <li>Technical information about your systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-foreground/80 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                <li>Provide and improve our AI automation services</li>
                <li>Communicate with you about our services</li>
                <li>Customize your experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <p className="text-foreground/80">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-foreground/80">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p className="text-foreground/80">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-dark-purple/50 rounded-lg">
                <p className="text-white">Email: neuralflow.cloud@gmail.com</p>
                <p className="text-white">WhatsApp: +92 310 5163094</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
