import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const company = "AISTECH SPACE, S.L.";
const address = "Cami Can Camps 17, 17-19 (Edificio VINSON - Oficina 2C), Sant Cugat del Vallès, 08174. Barcelona";
const email = "info@aistechspace.com";
const phone = "+34 935 481 193";

const FooterSection: React.FC = () => {
  return (
    <footer id="footer" className="bg-surface-container-highest text-on-surface pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-headline-small mb-6">Proyecto ÍCARO</h3>
              <p className="text-body-large text-on-surface-variant mb-6 max-w-md">
                Sistema de Observación de la Tierra en VLEO para la Lucha Contra Incendios
              </p>
            </div>
            <div>
              <h3 className="text-headline-small mb-6">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="text-body-medium">{company}</p>
                    <p className="text-body-medium text-on-surface-variant">{address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <a href={`mailto:${email}`} className="text-body-medium hover:text-primary transition-colors duration-300">
                    {email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <a href={`tel:${phone}`} className="text-body-medium hover:text-primary transition-colors duration-300">
                    {phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-outline-variant pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-body-small text-on-surface-variant mb-4 md:mb-0">
                © {new Date().getFullYear()} Proyecto ÍCARO. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;