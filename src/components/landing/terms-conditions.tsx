"use client";
import { AnimatedSection } from "../animated-section";
import Link from "next/link";

export function TermsAndConditions() {
  return (
    <AnimatedSection id="terms-conditions" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
            <h1 className="font-headline text-3xl sm:text-4xl font-bold my-4 text-center">
              Términos y Condiciones Generales
            </h1>
            <p className="text-center text-sm text-muted-foreground">Última actualización: 09/2025</p>
        </div>

        <div className="space-y-8 text-muted-foreground">
            <div className="space-y-4 bg-card p-6 rounded-2xl shadow-sm border border-destructive">
                <h2 className="font-bold text-lg text-center text-destructive">AVISO LEGAL IMPORTANTE</h2>
                <p className="text-center">El presente documento constituye un contrato legalmente vinculante entre usted (el "Usuario") y <strong>José Manuel Vázquez Arenal</strong>, con domicilio en Calle Astronomía Nº 1, local 40, 41015 , Sevilla, con N.I.F./C.I.F. número 28790777K. El acceso y uso de este Sitio Web implica la aceptación expresa y sin reservas de todos los términos aquí expuestos.</p>
            </div>
            
            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">1. DATOS IDENTIFICATIVOS DEL TITULAR</h2>
                <ul className="list-none space-y-1 pl-4">
                    <li><strong>Titular:</strong> José Manuel Vázquez Arenal</li>
                    <li><strong>N.I.F./C.I.F.:</strong> 28790777K</li>
                    <li><strong>Domicilio social:</strong> Calle Astronomía Nº 1, local 40, 41015 , Sevilla</li>
                    <li><strong>Correo electrónico:</strong> info@macout.es</li>
                    <li><strong>Teléfono (opcional):</strong> 603 48 11 65</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">2. OBJETO Y ÁMBITO DE APLICACIÓN</h2>
                <p>Los presentes Términos y Condiciones regulan el acceso, navegación y utilización del Sitio Web, así como las responsabilidades derivadas del uso de sus contenidos.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">3. CONDICIONES DE ACCESO Y UTILIZACIÓN</h2>
                <h3 className="font-bold text-xl text-foreground mt-4">3.1. Carácter del acceso y utilización</h3>
                <p>El acceso al Sitio Web es libre y gratuito. No obstante, algunos servicios pueden estar sujetos a contratación y pago, lo cual se indicará claramente.</p>
                <h3 className="font-bold text-xl text-foreground mt-4">3.2. Obligación de uso correcto</h3>
                <p>El Usuario se compromete a utilizar el Sitio Web y sus contenidos de conformidad con la ley, la moral y el orden público.</p>
                <h3 className="font-bold text-xl text-foreground mt-4">3.3. Prohibiciones</h3>
                <p>Queda prohibido al Usuario introducir virus, difundir contenido ilícito o publicitario no autorizado, o proporcionar información falsa.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">4. REGISTRO DE USUARIOS</h2>
                <p>Para ciertos servicios, puede ser necesario el registro. El Usuario es responsable de la veracidad de sus datos y de la custodia de su contraseña.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">5. DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
                <p>El Titular es propietario de todos los derechos de propiedad intelectual e industrial del Sitio Web y sus contenidos. Queda prohibida la reproducción, distribución y comunicación pública de los contenidos con fines comerciales sin la autorización del Titular.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">6. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
                <p>El Titular no se responsabiliza de los daños que pudieran ocasionarse por errores, falta de disponibilidad del portal o transmisión de virus, a pesar de haber adoptado las medidas tecnológicas para evitarlo.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">7. ENLACES (LINKS)</h2>
                <p>El Titular no asume responsabilidad alguna por los contenidos de enlaces pertenecientes a sitios web ajenos.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">8. MODIFICACIONES</h2>
                <p>El Titular se reserva el derecho de efectuar, sin previo aviso, las modificaciones que considere oportunas en el Sitio Web.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">9. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h2>
                <p>El tratamiento de datos personales se rige por el RGPD y la LOPDGDD. Para más información, consulte nuestra <Link href="/privacidad" className="text-primary hover:underline">Política de Privacidad</Link>.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">10. POLÍTICA DE COOKIES</h2>
                <p>Este Sitio Web utiliza cookies. Para más información, consulte nuestra <Link href="/cookies" className="text-primary hover:underline">Política de Cookies</Link>.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">11. COMENTARIOS Y PARTICIPACIÓN DE LOS USUARIOS</h2>
                <p><strong>11.1. Responsabilidad sobre los comentarios:</strong> El Titular no se hace responsable de las opiniones vertidas por los Usuarios en los comentarios del blog. Dichos comentarios no representan la opinión del Titular.</p>
                <p><strong>11.2. Moderación de comentarios:</strong> El Titular se reserva el derecho de retirar todos aquellos comentarios y aportaciones que vulneren el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas, pornográficos, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resultaran adecuados para su publicación.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">DISPOSICIONES FINALES</h2>
                <h3 className="font-bold text-xl text-foreground mt-4">12. LEY APLICABLE Y JURISDICCIÓN</h3>
                <p>La relación se regirá por la normativa española. Ambas partes se someten a los Juzgados y Tribunales de la ciudad de Sevilla.</p>
            </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
