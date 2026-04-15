import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { WarrantyInfo } from "@/components/landing/warranty-info";

export default function GarantiaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <WarrantyInfo />
      </main>
      <Footer />
    </div>
  );
}
