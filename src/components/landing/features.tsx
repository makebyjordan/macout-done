import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, Cpu, Wrench, Store } from "lucide-react";
import { AnimatedSection } from "../animated-section";

const features = [
  {
    icon: Laptop,
    title: "Equipos de 2ª mano",
    description: "Revisamos y probamos todos nuestros equipos para garantizar su perfecto funcionamiento y calidad.",
  },
  {
    icon: Cpu,
    title: "Ampliaciones",
    description: "Mejoramos el rendimiento de tu equipo Apple, actualizando componentes para que vuele como el primer día.",
  },
  {
    icon: Wrench,
    title: "Servicio técnico",
    description: "Reparamos tu equipo Apple con la máxima profesionalidad. Ofrecemos presupuestos sin ningún compromiso.",
  },
  {
    icon: Store,
    title: "Tienda física",
    description: "Visítanos en Sevilla. Disponemos de una gran oferta de equipos en exposición para que los veas y pruebes.",
  },
];

export function Features() {
  return (
    <AnimatedSection id="features" className="bg-card">
        <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="text-center bg-background p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border-2 border-transparent hover:border-primary">
                        <CardHeader className="p-0 mb-4 flex-col items-center">
                            <div className="bg-primary text-primary-foreground rounded-full p-3 mb-4 w-fit">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <CardTitle className="font-headline text-xl font-bold">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </AnimatedSection>
  );
}
