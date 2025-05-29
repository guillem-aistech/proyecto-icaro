import React from 'react';

interface Feature {
  title: string;
  text: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section id="objetivos\" className="py-20 bg-surface-container-high">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-headline-medium text-on-surface text-center mb-4">Objetivos</h2>
          <p className="text-body-large text-on-surface-variant text-center mb-16 max-w-2xl mx-auto">
            Nuestros principales objetivos para el desarrollo del Proyecto ÍCARO
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-surface rounded-lg shadow-elevation-1 border border-outline-variant hover:shadow-elevation-2 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-on-primary font-medium text-title-medium">{feature.title}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="w-full h-0.5 bg-primary-container"></div>
                  </div>
                </div>
                
                <p className="text-body-medium text-on-surface ml-16">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;