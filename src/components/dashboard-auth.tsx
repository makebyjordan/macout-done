"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MacOutLogo } from "./icons";

export function DashboardAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("macout-auth") === "true";
    if (!isAuthenticated) {
      router.replace("/");
    } else {
      setIsAuth(true);
    }
  }, [router]);

  if (!isAuth) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center space-y-4 bg-background">
        <MacOutLogo className="h-24 w-24 animate-pulse text-accent" />
        <p className="text-muted-foreground">Cargando dashboard...</p>
      </div>
    );
  }

  return <>{children}</>;
}
