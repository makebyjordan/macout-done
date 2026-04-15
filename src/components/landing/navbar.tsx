"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MacOutLogo } from "../icons";
import { AuthModal } from "../auth-modal";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";

const navLinks = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#productos", label: "Productos" },
  { href: "/#quienes-somos", label: "Quiénes Somos" },
  { href: "/#testimonios", label: "Opiniones" },
  { href: "/#faq", label: "Preguntas" },
  { href: "/#contacto", label: "Contacto" },
];

export function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-card/80 backdrop-blur-sm" : "bg-transparent"
      )}>
        <div className="container mx-auto px-2">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center">
              <MacOutLogo className="h-8 w-8 text-foreground ml-2" />
              <div className="relative h-10 w-[128px] -ml-10">
                <Image
                    src="https://iili.io/KQ5X91e.png"
                    alt="Macout Logotipo"
                    fill
                    className="object-contain"
                    priority
                />
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="font-headline text-sm font-medium text-muted-foreground transition-colors hover:text-primary-foreground">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button onClick={() => setIsAuthModalOpen(true)} className="bg-primary text-primary-foreground rounded-full hover:bg-primary/90">
                Dashboard
              </Button>
            </div>
            
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between border-b pb-4">
                             <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                                <MacOutLogo className="h-8 w-8 text-foreground" />
                                <div className="relative h-10 w-[128px]">
                                  <Image
                                      src="https://iili.io/KQ5Y5vt.png"
                                      alt="Macout Logotipo"
                                      fill
                                      className="object-contain"
                                  />
                                </div>
                            </Link>
                        </div>
                        <nav className="flex flex-col gap-6 mt-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-headline text-lg font-medium text-muted-foreground transition-colors hover:text-primary-foreground">
                            {link.label}
                            </Link>
                        ))}
                        </nav>
                        <div className="mt-auto">
                            <Button onClick={() => { setIsAuthModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full bg-primary text-primary-foreground rounded-full hover:bg-primary/90">
                              Dashboard
                            </Button>
                        </div>
                    </div>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </div>
      </header>
      <AuthModal isOpen={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </>
  );
}
