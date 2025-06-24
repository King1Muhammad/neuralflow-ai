import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
            Terms of Service
          </h1>
          <p className="text-foreground/60">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card className="glass-card">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-foreground/80">
                By accessing and using Neural Flow's services, you accept and agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
              <p className="text-foreground/80 mb-4">
                Neural Flow provides AI automation solutions including:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                <li>Custom AI agent development</li>
                <li>Workflow and task automation</li>
                <li>AI consultation and integration</li>
                <li>Smart systems for enterprises</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Client Responsibilities</h2>
              <p className="text-foreground/80 mb-4">You agree to:</p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                <li>Provide accurate information about your requirements</li>
                <li>Cooperate during the implementation process</li>
                <li>Pay all fees as agreed upon</li>
                <li>Use our services in compliance with applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-foreground/80">
                All custom solutions developed by Neural Flow remain our intellectual property unless 
                otherwise specified in a separate agreement. Clients receive a license to use the 
                solutions for their business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p className="text-foreground/80">
                Neural Flow's liability is limited to the amount paid for our services. We are not 
                liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
              <div className="p-4 bg-dark-purple/50 rounded-lg">
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

export default TermsOfService;
