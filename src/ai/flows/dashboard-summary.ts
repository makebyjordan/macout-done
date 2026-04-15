'use server';
/**
 * @fileOverview Summarizes dashboard information for Macout employees.
 *
 * - getDashboardSummary - A function that generates a summary of key dashboard metrics.
 * - DashboardSummaryInput - The input type for the getDashboardSummary function.
 * - DashboardSummaryOutput - The return type for the getDashboardSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MonetaryAmountSchema = z.number().describe('A monetary amount in euros.');

const GetTotalRevenueToolSchema = z.object({
  totalRevenue: MonetaryAmountSchema.describe('The total revenue from sales.'),
});

const GetTotalExpensesToolSchema = z.object({
  totalExpenses: MonetaryAmountSchema.describe('The total expenses incurred.'),
});

const GetTotalInventoryToolSchema = z.object({
  totalInventory: z
    .number()
    .describe('The total number of items currently in inventory.'),
});

const GetNetBalanceToolSchema = z.object({
  netBalance: MonetaryAmountSchema.describe(
    'The net balance, calculated as total revenue minus total expenses.'
  ),
});

const getTotalRevenue = ai.defineTool({
  name: 'getTotalRevenue',
  description: 'Retrieves the total revenue from sales.',
  inputSchema: z.object({}),
  outputSchema: GetTotalRevenueToolSchema,
}, async () => {
  return {totalRevenue: 50000};
});

const getTotalExpenses = ai.defineTool({
  name: 'getTotalExpenses',
  description: 'Retrieves the total expenses incurred.',
  inputSchema: z.object({}),
  outputSchema: GetTotalExpensesToolSchema,
}, async () => {
  return {totalExpenses: 20000};
});

const getTotalInventory = ai.defineTool({
  name: 'getTotalInventory',
  description: 'Retrieves the total number of items currently in inventory.',
  inputSchema: z.object({}),
  outputSchema: GetTotalInventoryToolSchema,
}, async () => {
  return {totalInventory: 50};
});

const getNetBalance = ai.defineTool({
  name: 'getNetBalance',
  description: 'Retrieves the net balance, calculated as total revenue minus total expenses.',
  inputSchema: z.object({}),
  outputSchema: GetNetBalanceToolSchema,
}, async () => {
  return {netBalance: 30000};
});


const DashboardSummaryInputSchema = z.object({});
export type DashboardSummaryInput = z.infer<typeof DashboardSummaryInputSchema>;

const DashboardSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the dashboard information.'),
});
export type DashboardSummaryOutput = z.infer<typeof DashboardSummaryOutputSchema>;

export async function getDashboardSummary(
  input: DashboardSummaryInput
): Promise<DashboardSummaryOutput> {
  return dashboardSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dashboardSummaryPrompt',
  input: {schema: DashboardSummaryInputSchema},
  output: {schema: DashboardSummaryOutputSchema},
  tools: [getTotalRevenue, getTotalExpenses, getTotalInventory, getNetBalance],
  prompt: `You are an AI assistant summarizing key business metrics for a Macout employee.

  Generate a concise summary (20-30 words) of the current business state, using the available tools to fetch the latest data.
  Include the total revenue, total expenses, number of items in inventory, and net balance in the summary.
  `,
});

const dashboardSummaryFlow = ai.defineFlow(
  {
    name: 'dashboardSummaryFlow',
    inputSchema: DashboardSummaryInputSchema,
    outputSchema: DashboardSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
