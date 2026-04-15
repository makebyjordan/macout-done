"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { MacOutLogo } from "./icons";
import { LayoutDashboard, Package, Wallet, LogOut, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Resumen" },
  { href: "/dashboard/equipos", icon: Package, label: "Gestionar Equipos" },
  { href: "/dashboard/finanzas", icon: Wallet, label: "Gestión Financiera" },
  { href: "/dashboard/testimonios", icon: Star, label: "Testimonios" },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("macout-auth");
    router.push('/');
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2">
          <MacOutLogo className="h-8 w-8 text-foreground" />
          <div className="relative h-10 w-[128px]">
            <Image
                src="https://iili.io/KQ5Y5vt.png"
                alt="Macout Logotipo"
                fill
                className="object-contain"
                priority
            />
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(item.href) && (item.href !== '/dashboard' || pathname === '/dashboard')}
                className="font-headline font-semibold"
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
           <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout} className="font-semibold">
                    <LogOut className="h-5 w-5" />
                    Cerrar Sesión
                </SidebarMenuButton>
           </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
