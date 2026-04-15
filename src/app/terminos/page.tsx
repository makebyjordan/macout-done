import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { TermsAndConditions } from "@/components/landing/terms-conditions";

export default function TerminosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <TermsAndConditions />
      </main>
      <Footer />
    </div>
  );
}
