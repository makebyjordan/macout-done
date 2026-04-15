"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { AnimatedSection } from "../animated-section";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, text: "Dirección: C/Astronomia 1 local 40 41015" },
  { icon: Mail, text: "Email: info@macout.es" },
  { icon: Phone, text: "Teléfono: 603481165" },
];

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Mensaje Enviado",
      description: "¡Gracias por contactarnos! Te responderemos pronto.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-4">
          ¿Hablamos?
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Visítanos en nuestra tienda de Sevilla o envíanos un mensaje. Estaremos encantados de asesorarte.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="h-full w-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.829871547464!2d-5.961638684692019!3d37.41662997982601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126903253a805b%3A0xdf745b20f7abd6b6!2sC.%20Tecnolog%C3%ADa%2C%205%2C%2041015%20Sevilla!5e0!3m2!1ses!2ses!4v1678886456789!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary p-3 rounded-full">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-lg pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
