"use client";
import { AnimatedSection } from "../animated-section";

const warrantyExclusions = [
    "El incorrecto uso, manipulación o mantenimiento de un equipo, componente o periférico.",
    "Componentes quemados por sobretensiones eléctricas.",
    "Defecto o alteraciones en pantallas como manchas, pixeles muertos, destello de luz, sobrecalentamientos.",
    "No tengas las franjas o pegatinas de garantía.",
    "Incorrecta reparación, modificación o ampliación de un equipo.",
    "El daño causado por fuerza mayor por parte del cliente.",
    "Deterioro, eliminación u ocultación, por parte del cliente, de la factura de compra MAC OUT SEVILLA.",
    "No presente el ticket de compra del producto.",
    "Los detalles del producto registrado en la solicitud de devolución sean diferentes del producto comprado.",
    "El daño accidental (choques, impactos, caídas, daños por agua, humedad o daños por arena).",
    "El daño causado por negligencia y/o mal uso del producto; o incurrido durante el transporte del producto no realizado por MAC OUT SEVILLA.",
    "Los consumibles, es decir las baterías de los equipos o en su caso el cargador.",
    "Las fuentes de alimentación que hayan sido dañadas por sobrecargas de tensión o uso inadecuado por parte del cliente.",
    "Infección de virus informáticos en equipos, discos duros o de software adicional.",
];

const warrantyInvalidations = [
    "Deterioros estéticos del equipo por el uso por parte del cliente.",
    "Manipulación del equipo por el cliente o cualquier otra persona no autorizada por MAC OUT SEVILLA, productos modificados o reparados por el cliente o cualquier otra persona no autorizada por MAC OUT SEVILLA. En definitiva, no se aceptará ningún material dañado o con muestras de una manipulación incorrecta o inadecuada.",
];


export function WarrantyInfo() {
  return (
    <AnimatedSection id="warranty-info" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold my-4">
              Política de Garantía
            </h2>
        </div>

        <div className="space-y-8 text-muted-foreground">
            <div className="bg-card p-6 rounded-2xl shadow-sm border">
                <p className="text-center font-bold text-lg text-destructive">NUESTROS EQUIPOS NO TIENE DEVOLUCIÓN.</p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-sm border">
                <h3 className="font-bold text-2xl text-foreground mb-4">Periodos de Garantía</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><span className="font-semibold text-foreground">12 MESES DE GARANTÍA</span> para el equipo.</li>
                    <li><span className="font-semibold text-foreground">3 MESES DE GARANTÍA</span> para la batería.</li>
                </ul>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-sm border">
                <h3 className="font-bold text-2xl text-foreground mb-4">¿Qué es lo que no cubre la garantía?</h3>
                <ul className="list-disc list-inside space-y-3">
                   {warrantyExclusions.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-sm border">
                 <p className="mb-4">La garantía no cubrirá aquellos defectos producidos por el incorrecto uso del producto. Quedan, por tanto, excluidos de la cobertura de la garantía:</p>
                 <ul className="list-disc list-inside space-y-3">
                   {warrantyInvalidations.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-sm border">
                <p className="font-semibold text-foreground">
                    Macout no se responsabiliza de la información personal que contengan la unidad de almacenamiento de los equipos. El cliente se responsabiliza realizando las pertinentes copias de seguridad de los datos previo al proceso de reparación.
                </p>
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
