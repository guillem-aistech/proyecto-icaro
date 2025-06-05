import React from 'react';
import { Flame } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section
      id="proyecto"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-surface-container-low"
      style={{
        backgroundImage: `url('/thermal_acquisition_wildfire_rgb.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for darkening and color blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70 z-0"></div>
      {/* Animated satellite illustration (stylized) */}
      <div className="absolute top-4 left-1 sm:top-8 sm:left-8 md:top-12 md:left-16 opacity-20 animate-pulse pointer-events-none select-none">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 border-4 border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-20 sm:h-20 md:w-40 md:h-40 bg-primary-light rounded-full opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary rounded-full inline-flex items-center justify-center shadow-elevation-2">
              <Flame size={48} className="text-on-primary" />
            </div>
          </div>
          <h1 className="text-display-large md:text-display-large font-medium tracking-tight text-white mb-4 animate-slide-up">
            {title}
          </h1>
          <h2 className="text-headline-large md:text-headline-large font-regular text-white mt-4 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;