"use client";

import { Star } from "lucide-react";
import { AnimatedSection } from "../animated-section";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { useDashboard } from "@/hooks/use-dashboard";

export function AllTestimonials() {
  const { testimonials, loading } = useDashboard();
  const allTestimonials = [...testimonials].reverse();

  return (
    <AnimatedSection id="all-testimonials" className="py-16 sm:py-24">
       <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold my-4">
              La Voz de Nuestros Clientes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
                Nos enorgullece compartir la experiencia de quienes ya han confiado en nosotros. Su satisfacción es nuestro mayor logro y el motor que nos impulsa a mejorar cada día.
            </p>
        </div>

        {loading ? (
            <p className="text-center">Cargando testimonios...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 100}>
                  <Card className="h-full flex flex-col justify-between p-6 bg-card rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                      <CardContent className="p-0">
                          <div className="flex text-yellow-400 mb-4">
                              {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                          </div>
                          <p className="text-muted-foreground mb-6 text-base">"{testimonial.review}"</p>
                      </CardContent>
                      <div className="flex items-center">
                          <Avatar className="h-12 w-12 mr-4">
                              <AvatarFallback className="bg-primary text-primary-foreground font-bold">{testimonial.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                              <p className="font-bold text-foreground">{testimonial.name}</p>
                          </div>
                      </div>
                  </Card>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
