"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MacOutLogo } from "./icons";

const ACCESS_CODE = "m1c23t";

interface AuthModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function AuthModal({ isOpen, onOpenChange }: AuthModalProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (code === ACCESS_CODE) {
      setLoading(true);
      setTimeout(() => {
        sessionStorage.setItem("macout-auth", "true");
        router.push("/dashboard");
        onOpenChange(false);
      }, 1500); // Simulate network latency & show loading
    } else {
      setError("Código de acceso incorrecto.");
      toast({
        title: "Error de Acceso",
        description: "El código introducido no es válido. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleLogin}>
          <DialogHeader>
            <DialogTitle className="font-headline text-center text-2xl">
              Acceso al Dashboard
            </DialogTitle>
            <DialogDescription className="text-center">
              Introduce el código de acceso para continuar.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {loading ? (
              <div className="flex flex-col items-center justify-center space-y-4 py-8">
                <MacOutLogo className="h-16 w-16 animate-pulse text-accent" />
                <p className="text-muted-foreground">Verificando...</p>
              </div>
            ) : (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="code" className="text-right">
                  Código
                </Label>
                <Input
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="col-span-3"
                  type="password"
                />
                {error && <p className="col-span-4 text-center text-sm text-destructive">{error}</p>}
              </div>
            )}
          </div>
          {!loading && (
            <DialogFooter>
              <Button type="submit" className="w-full bg-gradient-to-r from-accent to-[hsl(var(--custom-yellow))] text-white">
                Entrar
              </Button>
            </DialogFooter>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
