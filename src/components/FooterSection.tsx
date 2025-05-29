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
              <div className="flex space-x-4">
                <button className="p-2 rounded-full bg-surface-container-high hover:bg-primary-container transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5 text-on-surface-variant" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-surface-container-high hover:bg-primary-container transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5 text-on-surface-variant" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.029 10.029 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
              </div>
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