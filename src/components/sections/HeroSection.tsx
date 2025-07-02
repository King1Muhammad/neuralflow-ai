import React from 'react';
import ThreeScene from '../ThreeScene';
import NeuralFlowAgent from '../ai/NeuralFlowAgent';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { useState } from 'react';

const HeroSection = () => {
  const [isAgentOpen, setIsAgentOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openCalendly = () => {
    window.open('https://calendly.com/neuralflow-cloud/30min', '_blank', 'width=800,height=600');
  };

  return (
    <>
      <section id="hero-section" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ThreeScene />
            <div className="absolute inset-0 bg-dark-purple/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-purple via-transparent to-dark-purple"></div>
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-accent-blue/5 to-transparent"></div>
          </div>
        <div className="relative z-10 text-center px-4 animate-fade-in parallax-bg" style={{ animationDelay: '0.5s'}}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight animate-scale-in">
            Grow Your Business
            <br />
            <span className="text-gradient animate-gradient-shift">
              with the Power of AI
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-foreground/80 animate-slide-in-up px-4" style={{ animationDelay: '0.8s' }}>
            We build world-class AI agents and automation systems to propel your business into the future.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-up px-4" style={{ animationDelay: '1.1s' }}>
            <Button
              onClick={openCalendly}
              size="lg"
              className="bg-accent-blue hover:bg-accent-blue/90 text-black font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto button-3d"
            >
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Book a Free Demo
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="border-accent-blue/50 text-accent-blue hover:bg-accent-blue/10 hover:text-accent-blue px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto button-3d"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              onClick={() => setIsAgentOpen(true)}
              size="lg" 
              variant="outline" 
              className="border-accent-pink/50 text-accent-pink hover:bg-accent-pink/10 hover:text-accent-pink px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto button-3d"
            >
              Talk to our AI Agent
            </Button>
          </div>
        </div>
      </section>

      <NeuralFlowAgent 
        isOpen={isAgentOpen} 
        onClose={() => setIsAgentOpen(false)} 
      />
    </>
  );
};

export default HeroSection;
