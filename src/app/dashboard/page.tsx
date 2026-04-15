import { SummaryWidgets } from "./components/summary-widgets";
import { AiSummary } from "./components/ai-summary";
import { RecentActivity } from "./components/recent-activity";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Resumen General
        </h1>
        <AiSummary />
      </div>

      <SummaryWidgets />
      <RecentActivity />
    </div>
  );
}
