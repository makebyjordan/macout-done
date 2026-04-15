"use client";

import { ProductCard } from "../product-card";
import { useDashboard } from "@/hooks/use-dashboard";
import { AnimatedSection } from "../animated-section";
import { Button } from "../ui/button";
import Link from "next/link";

export function Products() {
  const { products, loading } = useDashboard();

  return (
    // Se usa una <section> normal para el ancla y evitar animaciones anidadas.
    <section id="productos" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        
        {/* El título se anima por separado para un efecto más limpio. */}
        <AnimatedSection>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12">
            {loading ? "Cargando productos..." : "Nuestros Equipos Estrella"}
          </h2>
        </AnimatedSection>
        
        {/* Lógica de renderizado principal */}
        {loading ? (
          <div className="text-center text-muted-foreground">
            Buscando los mejores equipos...
          </div>
        ) : products.length === 0 ? (
          <AnimatedSection>
            <p className="text-center text-muted-foreground">
              No hay equipos disponibles en este momento.
            </p>
          </AnimatedSection>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...products]
                .reverse()
                .slice(0, 12)
                .map((product, index) => (
                  // La animación en cascada de las tarjetas se mantiene. ¡Perfecto!
                  <AnimatedSection key={product.id} delay={index * 100}>
                    <ProductCard product={product} />
                  </AnimatedSection>
                ))}
            </div>
            {products.length > 0 && (
              <div className="text-center mt-12">
                <Button asChild className="bg-gradient-to-r from-accent to-[hsl(var(--custom-yellow))] text-white rounded-full">
                  <Link href="https://es.wallapop.com/user/josev-9829447" target="_blank" rel="noopener noreferrer">
                    Ver más
                  </Link>
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
