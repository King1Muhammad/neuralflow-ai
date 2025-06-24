
import { Bot, Zap, BrainCircuit, Code, Camera, MessageSquare, Mic, Image } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import ParticlesBackground from '../three/ParticlesBackground';
import NeuralFlowAgent from '../ai/NeuralFlowAgent';

const services = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI that handles customer support, lead qualification, and user engagement 24/7.',
  },
  {
    icon: Camera,
    title: 'AI Product Photography',
    description: 'Transform your product images with AI-powered enhancement, background removal, and professional styling.',
  },
  {
    icon: Mic,
    title: 'Voice & Text AI Bots',
    description: 'Advanced voice recognition and text processing bots for hands-free interactions and automated responses.',
  },
  {
    icon: Bot,
    title: 'Custom AI Agent Development',
    description: 'Bespoke AI agents designed to handle complex tasks and integrate seamlessly with your systems.',
  },
  {
    icon: Zap,
    title: 'Workflow & Task Automation',
    description: 'We identify bottlenecks and implement AI-driven automations to boost efficiency and cut costs.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Consultation & Integration',
    description: 'Expert guidance on leveraging AI. We help you integrate cutting-edge models and platforms.',
  },
  {
    icon: Code,
    title: 'Smart Systems for Enterprises',
    description: 'Developing large-scale intelligent systems for process optimization, data analysis, and more.',
  },
  {
    icon: Image,
    title: 'AI Content Generation',
    description: 'Automated content creation for marketing, social media, and business communications using advanced AI.',
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isAgentOpen, setIsAgentOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section ref={sectionRef} id="services-section" className="py-20 relative overflow-hidden section-transition">
        <ParticlesBackground particleCount={2000} color1="#00c2ff" color2="#ff00c1" speed={0.8} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-purple/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient animate-gradient-shift">Our Core Services</h2>
            <p className="text-base md:text-lg text-foreground/70 mt-2 animate-slide-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
              Solutions to automate, innovate, and elevate your business.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="glass-card p-6 md:p-8 text-center flex flex-col items-center scroll-reveal animate-float"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${6 + index * 0.5}s`
                }}
              >
                <div className="bg-light-purple p-4 rounded-full mb-6 border border-white/10 animate-pulse-glow">
                  <service.icon className="h-6 w-6 md:h-8 md:w-8 text-accent-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-foreground/60 mb-6 flex-grow">{service.description}</p>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="sm"
                  className="border-accent-blue/50 text-accent-blue hover:bg-accent-blue/10 hover:text-accent-blue w-full"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center scroll-reveal">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent-blue hover:bg-accent-blue/90 text-black font-bold px-8 py-6 text-lg button-3d"
              >
                Book a Free Demo
              </Button>
              <Button
                onClick={() => setIsAgentOpen(true)}
                size="lg"
                variant="outline"
                className="border-accent-pink/50 text-accent-pink hover:bg-accent-pink/10 hover:text-accent-pink px-8 py-6 text-lg button-3d"
              >
                Talk to Our AI
              </Button>
            </div>
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

export default ServicesSection;
