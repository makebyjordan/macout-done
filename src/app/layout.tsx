import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { DashboardProvider } from '@/context/dashboard-provider';
import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import WhatsAppBubble from '@/components/ui/WhatsAppBubble';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: 'MacOut',
  description: 'Dale una segunda vida a la tecnología. Descubre tu Apple reacondicionado en Macout.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-body antialiased">
        <DashboardProvider>
          {children}
          <Toaster />
        </DashboardProvider>
        <WhatsAppBubble />
      </body>
    </html>
  );
}
