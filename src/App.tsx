import HeroSection from './components/HeroSection';
import TextSection from './components/TextSection';
import LogosSection from './components/LogosSection';
import FeaturesSection from './components/FeaturesSection';
import FooterSection from './components/FooterSection';

function App() {
  // Project data
  const projectData = {
    hero: {
      title: "Proyecto ÍCARO",
      subtitle: "Diseño de un Sistema de Observación de la Tierra en VLEO para la Lucha Contra Incendios",
    },
    description: `El objetivo del proyecto es desarrollar un sistema de observación de la tierra que opere en órbita muy baja (250 km), lo que permite tener una muy alta resolución de imágenes en las bandas espectrales específicas que permitan la detección de incendios forestales.

      El desarrollo completo se centra en 4 campos principales:
        1. Desarrollo de un telescopio específico para la detección de incendios.
        2. Desarrollo de un motor que permita operaciones en VLEO.
        3. Desarrollo de una plataforma satelital que vuele a 250 km de altura.
        4. Desarrollo de toda la algoritmia y tratamiento de los datos obtenidos por el sistema.`,
    consorcio: {
      items: [
        {
          name: "AISTECH SPACE, S.L.",
          logo: "/aistech.png",
        },
        {
          name: "KREIOS SPACE, S.L.",
          logo: "/kreios-space.png",
        },
        {
          name: "TELESPAZIO IBERICA, S.L.",
          logo: "/telespazio.png",
        },
        {
          name: "UNIVERSIDAD DE VIGO",
          logo: "/universidad-vigo.png",
        },
      ],
    },
    objetivos: {
      features: [
        {
          title: "1",
          text: "Avanzar en el conocimiento científico y tecnológico sobre la observación satelital de la Tierra y su aplicación en la monitorización de incendios forestales.",
        },
        {
          title: "2",
          text: "Avanzar en el conocimiento científico y tecnológico sobre las órbitas terrestres muy bajas (VLEO) y la capacidad tecnológica de operación en este entorno.",
        },
        {
          title: "3",
          text: "Realizar Pruebas de Concepto (PoC) para validar las tecnologías investigadas hasta TRL5, específicamente el telescopio, el motor y la plataforma satelital.",
        },
        {
          title: "4",
          text: "Facilitar el intercambio de mejores prácticas entre centros de conocimiento y empresas, fomentando una colaboración efectiva para la industrialización y comercialización de los resultados.",
        },
        {
          title: "5",
          text: "Fortalecer y posicionar al Consorcio y a sus empresas asociadas como líderes en sus respectivos ámbitos, permitiendo su participación activa en iniciativas internacionales y cooperación con agencias de gestión de incendios.",
        },
      ],
    },
    financiadores: {
      items: [
        {
          name: "CDTI",
          logo: "/cdti.png",
        },
        {
          name: "Ministerio de Ciencia, Innovación y Universidades",
          logo: "/ministerio.png",
        },
        {
          name: "Plan de Recuperación, Transformación y Resiliencia",
          logo: "/fondos-resiliencia.png",
        },
        {
          name: "Unión Europea NextGenerationEU",
          logo: "/union-europea.png",
        },
      ],
      description: "Proyecto subvencionado por el Centro para el Desarrollo Tecnológico y la Innovación E.P.E., (CDTI) mediante la concesión de ayudas destinadas al \"Programa Tecnológico Espacial\" en el marco del Plan de Recuperación, Transformación y Resiliencia (PERTEs Aeroespacial y de Salud de Vanguardia)",
    },
  };

  return (
    <div className="font-sans bg-surface text-on-surface">
      {/* Hero Section */}
      <HeroSection 
        title={projectData.hero.title} 
        subtitle={projectData.hero.subtitle} 
      />
      
      {/* Description Section */}
      <TextSection 
        content={projectData.description} 
      />
      
      {/* Consortium Section */}
      <LogosSection 
        id="consorcio"
        items={projectData.consorcio.items} 
      />
      
      {/* Objectives Section */}
      <FeaturesSection 
        features={projectData.objetivos.features} 
      />
      
      {/* Funders Section */}
      <LogosSection 
        id="financiadores"
        items={projectData.financiadores.items} 
        description={projectData.financiadores.description}
      />
      
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

export default App;