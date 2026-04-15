"use client";

import { useState } from "react";
import { WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDashboardSummary } from "@/ai/flows/dashboard-summary";

export function AiSummary() {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateSummary = async () => {
    setLoading(true);
    setError("");
    setSummary("");
    try {
      const result = await getDashboardSummary({});
      setSummary(result.summary);
    } catch (e) {
      setError("Failed to generate summary. Please try again.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <Button onClick={handleGenerateSummary} disabled={loading} className="w-full">
        <WandSparkles className="mr-2 h-4 w-4" />
        {loading ? "Generando resumen..." : "Generar Resumen con IA"}
      </Button>
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
      {summary && (
        <Card className="mt-4 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-lg">Resumen de IA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
