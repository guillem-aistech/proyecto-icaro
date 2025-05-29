import React from 'react';

interface LogoItem {
  name: string;
  logo: string;
}

interface LogosSectionProps {
  id: string;
  items: LogoItem[];
  description?: string;
}

const LogosSection: React.FC<LogosSectionProps> = ({ id, items, description }) => {
  return (
    <section id={id} className="py-16 bg-surface-container-low">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-headline-medium text-on-surface text-center mb-12">
            {id === 'consorcio' ? 'Consorcio' : 'Financiadores'}
          </h2>
          
          <div className={`grid grid-cols-1 ${items.length > 2 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2'} gap-8 mb-12`}>
            {items.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-6 bg-surface rounded-lg shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300 h-48"
              >
                {/* Logo with fallback */}
                <div className="flex items-center justify-center h-20 mb-4">
  <div className="flex items-center justify-center w-24 h-16 p-4 bg-surface-container-highest rounded-lg border border-outline-variant">
    <img 
      src={item.logo} 
      alt={item.name} 
      className="h-12 w-12 object-contain" 
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const parent = target.parentElement;
        if (parent) {
          const span = document.createElement('span');
          span.className = 'text-title-medium text-on-surface-variant font-medium text-center';
          span.textContent = item.name;
          parent.appendChild(span);
        }
      }}
    />
  </div>
</div>
                <h3 className="text-title-small text-on-surface text-center mt-2">{item.name}</h3>
              </div>
            ))}
          </div>
          
          {description && (
            <div className="max-w-4xl mx-auto mt-8 p-6 bg-surface-container-high rounded-lg border border-outline-variant">
              <p className="text-body-medium text-on-surface-variant">{description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;