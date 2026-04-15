import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { PrivacyPolicy } from "@/components/landing/privacy-policy";

export default function PrivacidadPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}
