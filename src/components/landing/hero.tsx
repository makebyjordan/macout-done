import Image from "next/image";
import { AnimatedSection } from "../animated-section";
import Link from "next/link";
import { MacOutLogo } from "../icons";

export function Hero() {
  return (
    <AnimatedSection id="inicio" className="relative h-screen w-full text-white">
      <Image
        src="https://iili.io/Kk6Z9Rt.jpg"
        alt="Logo de Macout sobre un fondo de cubos azules y negros"
        fill
        priority
        className="object-cover object-center"
        data-ai-hint="logo company background"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto flex flex-col items-center justify-center h-full px-4">
        <div className="max-w-4xl mx-auto mb-8 text-center">
           <Link href="/" className="flex items-center justify-center gap-2 sm:gap-4">
              <div className="relative h-36 w-[174px] sm:h-48 sm:w-[222px]">
                  <Image
                      src="https://iili.io/KQ5UldN.png"
                      alt="Macout Logo Manzana"
                      fill
                      className="object-contain"
                  />
              </div>
              <div className="relative h-[150px] w-[150px] sm:h-[225px] sm:w-[225px]">
                <Image
                    src="https://iili.io/KQ5Y5vt.png"
                    alt="Macout Logotipo"
                    fill
                    className="object-contain"
                />
              </div>
            </Link>
          <h1 className="font-headline pt-8 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Tu Apple reacondicionado.
          </h1>
          <p className="font-bold text-3xl md:text-5xl text-primary mt-4">Calidad y Ahorro</p>
          <p className="mt-4 text-base md:text-xl text-gray-200">
              Equipos 100% verificados,
              <br />
              con garantía y al mejor precio.
              <br />
              Directamente desde el corazón de Sevilla.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
