"use client";

import { useDashboard } from "@/hooks/use-dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ArrowUpCircle, ArrowDownCircle, DollarSign } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function SummaryWidgets() {
  const { products, totalIncome, totalExpenses, netBalance } = useDashboard();

  const stats = [
    {
      title: "Equipos en Venta",
      value: products.length,
      icon: Package,
      color: "text-blue-500",
    },
    {
      title: "Total de Ingresos",
      value: formatCurrency(totalIncome),
      icon: ArrowUpCircle,
      color: "text-[hsl(var(--custom-green))]",
    },
    {
      title: "Total de Gastos",
      value: formatCurrency(totalExpenses),
      icon: ArrowDownCircle,
      color: "text-destructive",
    },
    {
      title: "Balance Neto",
      value: formatCurrency(netBalance),
      icon: DollarSign,
      color: netBalance >= 0 ? "text-[hsl(var(--custom-green))]" : "text-accent",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={cn("h-4 w-4 text-muted-foreground", stat.color)} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
