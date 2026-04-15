import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { CookiesPolicy } from "@/components/landing/cookies-policy";

export default function CookiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <CookiesPolicy />
      </main>
      <Footer />
    </div>
  );
}
