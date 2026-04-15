import Image from "next/image";
import { AnimatedSection } from "../animated-section";

const images = [
    { src: "https://iili.io/KM3w5kN.jpg", className: "col-span-2 row-span-2" },
    { src: "https://iili.io/KM3waIt.jpg", className: "" },
    { src: "https://iili.io/KM3wchX.jpg", className: "" },
    { src: "https://iili.io/KM3w1Bs.jpg", className: "" },
    { src: "https://iili.io/KM3wEEG.jpg", className: "" },
    { src: "https://iili.io/KnvmNQS.webp", className: "col-span-2" },
    { src: "https://iili.io/Knvmgvj.webp", className: "" },
    { src: "https://iili.io/KnvmiZB.webp", className: "" },
    { src: "https://iili.io/KnvmPjV.webp", className: "" },
    { src: "https://iili.io/KnvmLCP.webp", className: "" },
];

export function AboutUs() {
  return (
    // 1. Usamos <section> normal para el ancla #quienes-somos.
    <section id="quienes-somos" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        
        {/* 2. Animamos el bloque de texto por separado. */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold bg-secondary py-1 px-3 rounded-full">Quiénes Somos</span>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold my-4">
                Pasión por Apple y por Sevilla
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nacimos de la pasión por la tecnología de Apple y el compromiso con la sostenibilidad. En Macout, creemos que la calidad no tiene por qué ser cara ni perjudicial para el planeta.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Seleccionamos, verificamos y ponemos a punto cada dispositivo para que disfrutes de la experiencia Apple como si fuera nuevo. Somos tu tienda de confianza en Sevilla.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Encuentra nuestras últimas ofertas y ponte en contacto con nosotros a través de nuestras plataformas de venta principales: Wallapop e Instagram. ¡Síguenos para no perderte nada!
              </p>
          </div>
        </AnimatedSection>

        {/* 3. Animamos la parrilla de imágenes después del texto (con un pequeño retraso). */}
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-96">
              {images.slice(0, 8).map((image, index) => (
                  <div key={index} className={`relative overflow-hidden rounded-2xl group ${image.className}`}>
                      <Image
                          src={image.src}
                          alt={`Equipo de Macout ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                      />
                  </div>
              ))}
          </div>
        </AnimatedSection>
        
      </div>
    </section>
  );
}
