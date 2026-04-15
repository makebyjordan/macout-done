"use client";
import { AnimatedSection } from "../animated-section";
import Link from "next/link";

export function CookiesPolicy() {
  return (
    <AnimatedSection id="cookies-policy" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
            <h1 className="font-headline text-3xl sm:text-4xl font-bold my-4 text-center">
              Política de Cookies
            </h1>
            <p className="text-center text-sm text-muted-foreground">Última actualización: 09/2025</p>
        </div>

        <div className="space-y-8 text-muted-foreground">
            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">1. Introducción y Responsable del Tratamiento</h2>
                <p>Bienvenido a https://macout.es/. Esta política tiene como objetivo informarte de manera clara y precisa sobre el uso de cookies en nuestro sitio web.</p>
                <ul className="list-none space-y-1 pl-4">
                    <li><strong>Titular:</strong> José Manuel Vázquez Arenal</li>
                    <li><strong>NIF/CIF:</strong> 28790777K</li>
                    <li><strong>Domicilio Social:</strong> Calle Astronomía Nº 1, local 40, 41015 , Sevilla</li>
                    <li><strong>Correo electrónico de contacto:</strong> info@macout.es</li>
                </ul>
            </div>
            
            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">2. ¿Qué son las Cookies y Tecnologías Similares?</h2>
                <p>Una cookie es un pequeño fichero de texto que un sitio web almacena en tu dispositivo para recordar información sobre tu navegación. También podemos utilizar tecnologías similares como píxeles de seguimiento o Local Storage para finalidades análogas. En esta política, nos referiremos a todas ellas como "cookies".</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">3. Tipología de Cookies Utilizadas</h2>
                <h3 className="font-bold text-xl text-foreground mt-4">A. Según la entidad que las gestiona:</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Cookies Propias:</strong> Gestionadas directamente por nosotros desde nuestros servidores.</li>
                    <li><strong>Cookies de Terceros:</strong> Gestionadas por otras empresas que nos prestan servicios, como Google Analytics.</li>
                </ul>
                <h3 className="font-bold text-xl text-foreground mt-4">B. Según el plazo de tiempo que permanecen activadas:</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Cookies de Sesión:</strong> Temporales, se eliminan al cerrar el navegador.</li>
                    <li><strong>Cookies Persistentes:</strong> Permanecen en tu dispositivo durante un tiempo definido.</li>
                </ul>
                <h3 className="font-bold text-xl text-foreground mt-4">C. Según su finalidad:</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Cookies Técnicas (Estrictamente Necesarias):</strong> Imprescindibles para el funcionamiento del sitio web. No requieren tu consentimiento y siempre están activas.</li>
                    <li><strong>Cookies de Preferencias o Personalización:</strong> Permiten recordar información como el idioma o la región. Requieren tu consentimiento.</li>
                    <li><strong>Cookies de Análisis o Medición (Estadísticas):</strong> Nos ayudan a entender cómo los visitantes interactúan con la web, recopilando información de forma anónima. Requieren tu consentimiento.</li>
                    <li><strong>Cookies de Publicidad Comportamental (Marketing):</strong> Almacenan información sobre tu comportamiento para mostrarte anuncios personalizados. Requieren tu consentimiento explícito.</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">4. Gestión, Configuración y Revocación del Consentimiento</h2>
                <h3 className="font-bold text-xl text-foreground mt-4">A. A través de nuestro Panel de Configuración de Cookies:</h3>
                <p>La primera vez que visitas nuestro sitio, te aparece un banner para aceptar, rechazar o configurar las cookies. Puedes cambiar tus preferencias en cualquier momento a través de un enlace permanente.</p>
                <h3 className="font-bold text-xl text-foreground mt-4">B. A través de la configuración de tu navegador:</h3>
                <p>Todos los navegadores modernos te permiten gestionar las cookies. Puedes configurar tu navegador para aceptarlas, rechazarlas o eliminarlas. Ten en cuenta que si bloqueas las cookies técnicas, es posible que partes de nuestro sitio web no funcionen correctamente.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">5. Transferencias Internacionales de Datos</h2>
                <p>Algunos de nuestros proveedores de servicios (como Google, Meta, etc.) pueden procesar la información recopilada por sus cookies en servidores ubicados fuera del Espacio Económico Europeo (EEE). Nos aseguramos de que estas transferencias se realicen con las garantías adecuadas, como la firma de Cláusulas Contractuales Tipo (CCT) o la adhesión a marcos de privacidad reconocidos.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">6. Derechos del Usuario y Más Información</h2>
                <p>El uso de cookies que tratan datos personales te confiere los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad. Para una explicación detallada de tus derechos y cómo ejercerlos, por favor, consulta nuestra <Link href="/privacidad" className="text-primary hover:underline">Política de Privacidad</Link>.</p>
                <p>Si consideras que tus derechos han sido vulnerados, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">7. Actualización de la Política de Cookies</h2>
                <p>Nos reservamos el derecho a modificar esta política para adaptarla a futuras novedades legislativas o cambios en las cookies que utilizamos. Cualquier cambio significativo será comunicado a los usuarios.</p>
            </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
