import type { PropsWithChildren } from "react";
import { DashboardAuth } from "@/components/dashboard-auth";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <DashboardAuth>
      <SidebarProvider>
        <div className="flex min-h-screen">
          <DashboardSidebar />
          <main className="flex-1 bg-background p-4 sm:p-6 md:p-8">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </DashboardAuth>
  );
}
