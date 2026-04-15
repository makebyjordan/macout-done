import { MacOutLogo } from "../icons";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const WallapopIcon = (props: { className?: string }) => (
  <Image 
    src="https://iili.io/KEq55uV.png" 
    alt="Wallapop" 
    width={20} 
    height={20} 
    className={props.className} 
  />
);

const socialLinks = [
  { icon: WallapopIcon, href: "https://es.wallapop.com/item/mac-out-sevilla-ordenadores-apple-724154289", name: "Wallapop" },
  { icon: Instagram, href: "https://www.instagram.com/mac_out_sevilla/?hl=es", name: "Instagram" },
];

const footerLinks = {
  productos: [
    { href: "/#productos", label: "iMac" },
    { href: "/#productos", label: "Macbook Air" },
    { href: "/#productos", label: "Macbook Pro" },
  ],
  soporte: [
    { href: "/#contacto", label: "Contacto" },
    { href: "/#faq", label: "Preguntas Frecuentes" },
    { href: "/garantia", label: "Garantía" },
  ],
  legal: [
    { href: "/terminos", label: "Términos y Condiciones" },
    { href: "/privacidad", label: "Política de Privacidad" },
    { href: "/cookies", label: "Política de Cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t-2">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <MacOutLogo className="h-10 w-10 text-foreground" />
              <div className="relative h-10 w-[128px]">
                 <Image
                    src="https://iili.io/KQ5Y5vt.png"
                    alt="Macout Logotipo"
                    fill
                    className="object-contain"
                />
              </div>
            </Link>
            <p className="text-muted-foreground max-w-xs mb-6">
              Calidad y sostenibilidad en el corazón de Sevilla. Tu Apple reacondicionado de confianza.
            </p>
             <Button asChild className="bg-primary text-primary-foreground rounded-full hover:bg-primary/90">
                <Link href="#contacto">
                    Contactar &#8594;
                </Link>
              </Button>
          </div>
          <div>
            <h4 className="font-headline font-bold mb-4">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold mb-4">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Macout. Todos los derechos reservados.
          </p>
          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-muted-foreground hover:bg-secondary p-2 rounded-full transition-colors"
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
