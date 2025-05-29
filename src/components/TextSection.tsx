import React from 'react';

interface TextSectionProps {
  content: string;
}

const TextSection: React.FC<TextSectionProps> = ({ content }) => {
  // Process the content to handle the special formatting in the markdown
  const contentParts = content.split('\n\n');
  
  // Extract main text and list if present
  const mainText = contentParts[0];
  const listText = contentParts.length > 1 ? contentParts[1] : null;
  
  // Process list items if they exist
  const listItems = listText 
    ? listText.split('\n')
        .filter(line => line.trim().length > 0)
        .map(line => {
          // Check if the line starts with a number followed by a period
          const match = line.match(/^\s*(\d+)\.\s+(.+)$/);
          return match ? { number: match[1], text: match[2] } : { text: line };
        })
    : [];

  return (
    <section id="descripcion" className="py-16 bg-surface-container">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-body-large text-on-surface mb-8 leading-relaxed">
              {mainText}
            </p>
            
            {listItems.length > 0 && (
              <div className="mt-6">
                <h3 className="text-title-medium text-on-surface mb-4">Desarrollo en 4 campos principales:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {listItems.filter(item => item.number).map((item, index) => (
                    <div 
                      key={index} 
                      className="p-6 bg-surface rounded-lg shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-2 border border-outline-variant"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                            <span className="text-on-primary-container font-medium">{item.number}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-body-medium text-on-surface">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextSection;