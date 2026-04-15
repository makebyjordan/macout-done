import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Contact } from "@/components/landing/contact";
import { AllTestimonials } from "@/components/landing/all-testimonials";

export default function TestimoniosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <AllTestimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
