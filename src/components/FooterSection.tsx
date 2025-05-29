import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterSectionProps {
  content: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ content }) => {
  // Process the content to extract information
  const lines = content.split('\n').filter(line => line.trim().length > 0);
  
  const company = lines[0] || '';
  const address = lines.slice(1, 3).join(', ') || '';
  
  // Extract email and phone if available
  const contactLine = lines[3] || '';
  const emailMatch = contactLine.match(/e-mail:\s*([^\s|]+)/);
  const phoneMatch = contactLine.match(/Tel:\s*([^\s]+)/);
  
  const email = emailMatch ? emailMatch[1] : '';
  const phone = phoneMatch ? phoneMatch[1] : '';

  return (
    <footer id="footer" className="bg-surface-container-highest text-on-surface pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-title-large mb-6">Proyecto ÍCARO</h3>
              <p className="text-body-medium text-on-surface-variant mb-6 max-w-md">
                Sistema de Observación de la Tierra en VLEO para la Lucha Contra Incendios
              </p>
            </div>
            
            <div>
              <h3 className="text-title-large mb-6">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="text-body-medium">{company}</p>
                    <p className="text-body-medium text-on-surface-variant">{address}</p>
                  </div>
                </div>
                
                {email && (
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <a href={`mailto:${email}`} className="text-body-medium hover:text-primary transition-colors duration-300">
                      {email}
                    </a>
                  </div>
                )}
                
                {phone && (
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <a href={`tel:${phone}`} className="text-body-medium hover:text-primary transition-colors duration-300">
                      {phone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="border-t border-outline-variant pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-body-small text-on-surface-variant mb-4 md:mb-0">
                © {new Date().getFullYear()} Proyecto ÍCARO. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-body-small text-on-surface-variant hover:text-primary transition-colors duration-300">
                  Política de Privacidad
                </a>
                <a href="#" className="text-body-small text-on-surface-variant hover:text-primary transition-colors duration-300">
                  Términos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;