import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedSection } from "../animated-section";

const faqItems = [
  {
    question: "¿Qué garantía tienen los productos?",
    answer: "Todos nuestros equipos reacondicionados pasan por un riguroso proceso de revisión y cuentan con una garantía de 1 año para tu total tranquilidad. Cubrimos cualquier defecto de funcionamiento que no esté relacionado con un mal uso."
  },
  {
    question: "¿Los equipos son 100% originales de Apple?",
    answer: "Absolutamente. Solo trabajamos con dispositivos y componentes originales de Apple. Cada equipo es verificado exhaustivamente para asegurar su autenticidad y su perfecto funcionamiento."
  },
  {
    question: "¿Qué métodos de pago aceptáis?",
    answer: "Aceptamos pagos a través de las plataformas seguras donde operamos, como Wallapop. Para recogidas locales en Sevilla, también aceptamos pago en efectivo o Bizum."
  },
  {
    question: "¿Hacéis envíos a toda España?",
    answer: "Sí, realizamos envíos a toda la Península a través de los servicios de mensajería seguros que ofrecen nuestras plataformas de venta, garantizando que tu pedido llegue rápido y en perfectas condiciones."
  },
  {
    question: "¿Puedo ver el equipo antes de comprarlo?",
    answer: "¡Claro! Si estás en Sevilla, puedes concertar una cita para ver y probar el equipo sin ningún compromiso. Para envíos, proporcionamos fotos y vídeos detallados para que veas el estado real del producto."
  },
  {
    question: "¿Qué significa que un equipo es reacondicionado?",
    answer: "Significa que ha tenido un uso previo, pero no te preocupes. En Macout, cada equipo pasa por un exhaustivo proceso de revisión y prueba. Nuestros técnicos expertos se aseguran de que cada componente funcione a la perfección, garantizando que recibas un producto 100% funcional y en excelentes condiciones."
  },
  {
    question: "¿Podéis mejorar el rendimiento de mi equipo Apple?",
    answer: "¡Por supuesto! Si sientes que tu Mac o MacBook necesita un impulso, ofrecemos servicios de ampliación. Podemos mejorar la memoria RAM, aumentar el almacenamiento con discos SSD más rápidos y optimizar su rendimiento general para que vuelva a volar."
  },
  {
    question: "¿Ofrecéis servicio técnico para reparaciones?",
    answer: "Sí, contamos con un servicio técnico especializado en la reparación de cualquier dispositivo Apple. Realizamos diagnósticos precisos y te ofrecemos un presupuesto sin ningún tipo de compromiso. Confía en nosotros para solucionar cualquier problema."
  },
  {
    question: "¿Tenéis tienda física en Sevilla?",
    answer: "Sí, puedes visitarnos en nuestra tienda en Sevilla. Disponemos de una gran oferta de equipos en exposición para que puedas verlos y probarlos en persona. Nuestro equipo estará encantado de asesorarte para que encuentres el dispositivo Apple que mejor se adapte a ti."
  }
];

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold bg-secondary py-1 px-3 rounded-full text-secondary-foreground">Resolviendo Dudas</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold my-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
                Aquí encontrarás respuesta a las dudas más comunes. Si no encuentras lo que buscas, no dudes en contactarnos.
            </p>
        </div>
        <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                 <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="font-bold text-lg text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
