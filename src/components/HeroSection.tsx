import React from 'react';
import { Flame } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section id="proyecto\" className="relative min-h-[80vh] flex items-center justify-center bg-surface-container-low overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-container/40 to-surface-container-low/90 z-0"></div>
      
      {/* Animated satellite illustration (stylized) */}
      <div className="absolute top-1/4 right-1/4 opacity-20 animate-pulse">
        <div className="w-40 h-40 md:w-60 md:h-60 border-4 border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-40 md:h-40 bg-primary-light rounded-full opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary rounded-full inline-flex items-center justify-center shadow-elevation-2">
              <Flame size={48} className="text-on-primary" />
            </div>
          </div>
          
          <h1 className="text-display-medium md:text-display-large font-medium tracking-tight text-on-surface mb-4 animate-slide-up">
            {title}
          </h1>
          
          <h2 className="text-headline-small md:text-headline-medium font-regular text-on-surface-variant mt-4 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </h2>
          
          <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button className="px-8 py-3 bg-primary text-on-primary text-label-large rounded-full shadow-elevation-2 hover:shadow-elevation-3 transition-shadow duration-300">
              Conocer más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;