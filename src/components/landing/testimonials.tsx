"use client";

import { Star } from "lucide-react";
import { AnimatedSection } from "../animated-section";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { useDashboard } from "@/hooks/use-dashboard";


export function Testimonials() {
  const { testimonials, loading } = useDashboard();
  const featuredTestimonials = [...testimonials].reverse().slice(0, 4);

  return (
    <section id="testimonios" className="py-16 sm:py-24">
       <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold bg-secondary py-1 px-3 rounded-full text-secondary-foreground">Testimonios</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold my-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
                La satisfacción de nuestros clientes es nuestra mejor carta de presentación. Aquí tienes algunas de sus opiniones.
            </p>
        </div>

        {loading ? (
          <p className="text-center">Cargando testimonios...</p>
        ) : testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
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
        ) : (
          <p className="text-center text-muted-foreground">Aún no hay testimonios para mostrar.</p>
        )}
        
        {testimonials.length > 4 && (
          <div className="text-center mt-12">
              <Button asChild className="bg-gradient-to-r from-accent to-[hsl(var(--custom-yellow))] text-white rounded-full">
                  <Link href="/testimonios">
                      Dicen mucho más...
                  </Link>
              </Button>
          </div>
        )}
      </div>
    </section>
  );
}
