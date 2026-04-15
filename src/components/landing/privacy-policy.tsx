"use client";
import { AnimatedSection } from "../animated-section";

export function PrivacyPolicy() {
  return (
    <AnimatedSection id="privacy-policy" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
            <h1 className="font-headline text-3xl sm:text-4xl font-bold my-4 text-center">
              Política de Privacidad
            </h1>
            <p className="text-center text-sm text-muted-foreground">Última actualización: 09/2025</p>
        </div>

        <div className="space-y-8 text-muted-foreground">
            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">1. INTRODUCCIÓN Y COMPROMISO</h2>
                <p>Bienvenido a Macout (en adelante, el "Sitio Web"). En José Manuel Vázquez Arenal (en adelante, "Nosotros" o el "Responsable"), la privacidad de nuestros usuarios y la protección de sus datos personales son una prioridad fundamental.</p>
                <p>Esta Política de Privacidad tiene como objetivo informarle de manera clara, transparente y detallada sobre cómo recogemos, tratamos, utilizamos, conservamos y protegemos su información personal, en estricto cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD), y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).</p>
                <p>El acceso y uso de nuestro Sitio Web implica su conocimiento y aceptación de los términos recogidos en esta política.</p>
            </div>
            
            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">2. RESPONSABLE DEL TRATAMIENTO DE SUS DATOS</h2>
                <p>La entidad responsable del tratamiento de los datos personales recogidos a través de este Sitio Web es:</p>
                <ul className="list-none space-y-1 pl-4">
                    <li><strong>Identidad:</strong> José Manuel Vázquez Arenal</li>
                    <li><strong>N.I.F./C.I.F.:</strong> 28790777K</li>
                    <li><strong>Domicilio social:</strong> Calle Astronomía Nº 1, local 40, 41015 , Sevilla</li>
                    <li><strong>Correo electrónico de contacto:</strong> info@macout.es</li>
                    <li><strong>Teléfono (opcional):</strong> 603 48 11 65</li>
                </ul>
                <p>Para cualquier consulta, duda o solicitud relativa al tratamiento de sus datos, puede contactarnos a través del correo electrónico facilitado.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">3. PRINCIPIOS APLICABLES AL TRATAMIENTO DE DATOS</h2>
                <p>En el tratamiento de sus datos personales, aplicaremos los siguientes principios exigidos por el RGPD:</p>
                 <ul className="list-disc list-inside space-y-2">
                    <li><strong>Principio de licitud, lealtad y transparencia:</strong> Requeriremos siempre su consentimiento para el tratamiento de sus datos para uno o varios fines específicos de los que le informaremos previamente con absoluta transparencia.</li>
                    <li><strong>Principio de minimización de datos:</strong> Solo solicitaremos los datos estrictamente necesarios en relación con los fines para los que los tratamos.</li>
                    <li><strong>Principio de limitación del plazo de conservación:</strong> Los datos serán mantenidos durante no más tiempo del necesario para los fines del tratamiento.</li>
                    <li><strong>Principio de integridad y confidencialidad:</strong> Sus datos serán tratados de tal manera que se garantice una seguridad adecuada y su confidencialidad.</li>
                </ul>
            </div>
            
            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">4. DATOS PERSONALES RECOGIDOS Y FINALIDADES DEL TRATAMIENTO</h2>
                <p>Recopilamos su información personal a través de diferentes vías en nuestro Sitio Web. A continuación, se detalla qué datos se recogen, con qué finalidad y cuál es la base legal que nos legitima para hacerlo:</p>
                <h3 className="font-bold text-xl text-foreground mt-4">a) Formulario de Contacto</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Datos recogidos:</strong> Nombre, dirección de correo electrónico, y cualquier otra información que usted decida incluir voluntariamente en el cuerpo del mensaje.</li>
                    <li><strong>Finalidad:</strong> La finalidad principal es gestionar, atender y dar respuesta a sus consultas, solicitudes de información, peticiones de presupuesto, sugerencias o cualquier otra comunicación que nos dirija a través de esta vía.</li>
                    <li><strong>Base jurídica:</strong> El tratamiento de estos datos está basado en su consentimiento explícito (art. 6.1.a RGPD), que nos otorga al marcar la casilla de aceptación de esta política de privacidad antes de enviar el formulario.</li>
                </ul>
                <h3 className="font-bold text-xl text-foreground mt-4">b) Suscripción a nuestro Boletín Informativo (Newsletter)</h3>
                 <ul className="list-disc list-inside space-y-2">
                    <li><strong>Datos recogidos:</strong> Dirección de correo electrónico y, de forma opcional, su nombre para personalizar las comunicaciones.</li>
                    <li><strong>Finalidad:</strong> Enviarle de forma periódica nuestro boletín electrónico, que puede incluir artículos de blog, noticias de nuestro sector, información sobre nuestros servicios, eventos o promociones que consideremos de su interés.</li>
                    <li><strong>Base jurídica:</strong> Su consentimiento explícito (art. 6.1.a RGPD). Para garantizarlo, utilizamos un sistema de doble opt-in, por el que deberá confirmar su suscripción a través de un correo de verificación que le enviaremos. Podrá revocar este consentimiento en cualquier momento a través del enlace para darse de baja incluido en cada comunicación.</li>
                </ul>
                <h3 className="font-bold text-xl text-foreground mt-4">c) Cookies y Datos de Navegación</h3>
                 <ul className="list-disc list-inside space-y-2">
                    <li><strong>Datos recogidos:</strong> Dirección IP, tipo y versión del navegador, sistema operativo, identificadores de dispositivo, páginas visitadas, duración de la visita, y otros datos técnicos de navegación.</li>
                    <li><strong>Finalidad:</strong> Utilizamos estos datos para realizar análisis estadísticos anónimos sobre el uso del Sitio Web (p. ej., con Google Analytics) para mejorar su estructura y contenido, para garantizar la seguridad técnica y el correcto funcionamiento del sitio, y para personalizar su experiencia de usuario.</li>
                    <li><strong>Base jurídica:</strong> Para las cookies estrictamente necesarias, la base es nuestro interés legítimo (art. 6.1.f RGPD). Para el resto de cookies (analíticas, publicitarias, etc.), la base es su consentimiento explícito (art. 6.1.a RGPD), que puede otorgar, configurar o rechazar a través del banner de gestión de cookies. Para más información, consulte nuestra Política de Cookies en: Enlace a tu Política de Cookies</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">5. PLAZO DE CONSERVACIÓN DE SUS DATOS</h2>
                <p>Sus datos personales se conservarán durante el tiempo mínimo indispensable para cumplir con las finalidades para las que fueron recogidos. Los criterios que utilizamos son:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Datos de formularios de contacto:</strong> Se conservarán durante el tiempo necesario para tramitar su solicitud y, posteriormente, se mantendrán bloqueados durante los plazos de prescripción legales para la atención de posibles responsabilidades.</li>
                    <li><strong>Datos de suscripción al boletín:</strong> Se conservarán de forma indefinida mientras usted no revoque su consentimiento o solicite la baja del servicio.</li>
                    <li><strong>Datos de cookies:</strong> Se conservarán según los plazos específicos de cada cookie, tal y como se detalla en nuestra Política de Cookies.</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">6. DESTINATARIOS DE SUS DATOS</h2>
                <p>No cederemos ni comunicaremos sus datos a terceros, salvo que contemos con su consentimiento expreso o estemos obligados por ley. Sin embargo, para prestar nuestros servicios, necesitamos el apoyo de proveedores que actúan como nuestros encargados del tratamiento. Estos terceros solo accederán a sus datos para ejecutar los servicios contratados, siguiendo nuestras instrucciones y con la obligación de aplicar las mismas medidas de seguridad. Estos proveedores incluyen:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Proveedores de alojamiento web (Hosting).</li>
                    <li>Plataformas de gestión de correo electrónico y email marketing.</li>
                    <li>Herramientas de análisis web, como Google Analytics.</li>
                </ul>
                <p><strong>Transferencias Internacionales:</strong> Algunos de estos proveedores pueden estar ubicados en países fuera del Espacio Económico Europeo (EEE). En estos casos, garantizamos que las transferencias internacionales de datos se realizan con las garantías adecuadas, como la adhesión al marco de Privacidad de Datos UE-EE.UU. o la firma de Cláusulas Contractuales Tipo (CCT) aprobadas por la Comisión Europea.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">7. SUS DERECHOS DE PROTECCIÓN DE DATOS</h2>
                <p>La normativa de protección de datos le confiere un conjunto de derechos sobre su información personal. Puede ejercerlos de forma gratuita en cualquier momento:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Derecho de Acceso:</strong> Tiene derecho a obtener confirmación de si estamos tratando datos personales que le conciernen y, en tal caso, a acceder a los mismos.</li>
                    <li><strong>Derecho de Rectificación:</strong> Puede solicitar la corrección de los datos personales que sean inexactos o que se completen los que sean incompletos.</li>
                    <li><strong>Derecho de Supresión ("Derecho al Olvido"):</strong> Puede solicitar la eliminación de sus datos personales cuando, entre otros motivos, ya no sean necesarios para los fines para los que fueron recogidos.</li>
                    <li><strong>Derecho a la Limitación del Tratamiento:</strong> Puede solicitar que suspendamos temporalmente el tratamiento de sus datos en determinadas circunstancias.</li>
                    <li><strong>Derecho a la Portabilidad de los Datos:</strong> Tiene derecho a recibir los datos personales que nos haya facilitado en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable.</li>
                    <li><strong>Derecho de Oposición:</strong> Puede oponerse en cualquier momento a que sus datos personales sean objeto de un tratamiento basado en nuestro interés legítimo o para fines de mercadotecnia directa.</li>
                </ul>
                <p><strong>¿Cómo ejercer sus derechos?</strong> Puede ejercer sus derechos enviando una solicitud por escrito, detallando el derecho que desea ejercer y adjuntando una copia de su DNI o documento identificativo equivalente, a nuestro domicilio social o a la dirección de correo electrónico: info@macout.es</p>
                <p><strong>Derecho a retirar el consentimiento y a presentar una reclamación:</strong> Tiene derecho a retirar su consentimiento en cualquier momento. Si considera que el tratamiento de sus datos infringe la normativa, puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su sitio web www.aepd.es.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">8. MEDIDAS DE SEGURIDAD</h2>
                <p>Hemos adoptado todas las medidas de índole técnica y organizativa necesarias para garantizar la seguridad, integridad y confidencialidad de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado. Estas medidas incluyen, entre otras, el uso de certificados de seguridad SSL, encriptación de datos, cortafuegos, controles de acceso y acuerdos de confidencialidad con nuestro personal y proveedores.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">9. PROTECCIÓN DE DATOS DE MENORES DE EDAD</h2>
                <p>Nuestros servicios no están dirigidos a menores de 14 años. No recopilamos de forma intencionada información de menores de dicha edad. Si usted es padre, madre o tutor y tiene conocimiento de que su hijo/a nos ha proporcionado datos personales sin su consentimiento, póngase en contacto con nosotros para proceder a su eliminación.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">10. VERACIDAD Y EXACTITUD DE LOS DATOS</h2>
                <p>Como usuario, usted garantiza que los datos personales que nos facilita son veraces, exactos y actuales, y se compromete a notificar cualquier modificación de los mismos. Usted será el único responsable de los daños y perjuicios que pudieran derivarse del suministro de información falsa o inexacta.</p>
            </div>

            <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">11. MODIFICACIÓN DE LA POLÍTICA DE PRIVACIDAD</h2>
                <p>Nos reservamos el derecho a modificar la presente política para adaptarla a futuras novedades legislativas, jurisprudenciales o a prácticas del sector. En dichos casos, anunciaremos los cambios en esta página con una antelación razonable a su puesta en práctica.</p>
            </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
