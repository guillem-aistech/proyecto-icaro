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
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center`}>
            {items.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center"
              >
                {/* Logo with fallback */}
                <div className="flex items-center justify-center h-80 w-full">
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    className="mx-auto h-48 w-48 object-contain" 
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
                {/* No mostrar el nombre como texto en ningún caso */}
              </div>
            ))}
          </div>
          
          {description && (
            <div className="max-w-4xl mx-auto mt-8">
              <p className="text-body-medium text-on-surface-variant text-center">{description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;