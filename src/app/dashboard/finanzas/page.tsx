"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDashboard } from "@/hooks/use-dashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Transaction, TransactionData } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const transactionSchema = z.object({
  title: z.string().min(3, "El título debe tener al menos 3 caracteres."),
  description: z.string().optional(),
  amount: z.coerce.number().positive("El importe debe ser un número positivo."),
});

type TransactionFormValues = z.infer<typeof transactionSchema>;

const TransactionForm = ({ type, onSave, editingTransaction, cancelEdit }: { type: 'income' | 'expense', onSave: (data: TransactionFormValues) => void, editingTransaction: Transaction | null, cancelEdit: () => void }) => {
  const form = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues: editingTransaction ? {
      title: editingTransaction.title,
      description: editingTransaction.description,
      amount: editingTransaction.amount,
    } : {
      title: "",
      description: "",
      amount: 0,
    },
  });

  const onSubmit = (values: TransactionFormValues) => {
    onSave(values);
    form.reset({ title: "", description: "", amount: 0 });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder={type === 'income' ? "Venta MacBook Pro" : "Compra lote iPhones"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción (Opcional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Detalles de la transacción" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio Total (€)</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
            <Button type="submit" disabled={form.formState.isSubmitting} className="bg-gradient-to-r from-accent to-[hsl(var(--custom-yellow))] text-white">
                {form.formState.isSubmitting ? "Guardando..." : (editingTransaction ? `Actualizar ${type === 'income' ? 'Ingreso' : 'Gasto'}` : `Guardar ${type === 'income' ? 'Ingreso' : 'Gasto'}`)}
            </Button>
            {editingTransaction && (
                <Button type="button" variant="ghost" onClick={cancelEdit}>
                    Cancelar
                </Button>
            )}
        </div>
      </form>
    </Form>
  )
}

const TransactionsTable = ({ type, onEdit, onDelete }: { type: 'income' | 'expense', onEdit: (tx: Transaction) => void, onDelete: (id: string) => void }) => {
  const { transactions, loading } = useDashboard();
  const filteredTxs = useMemo(() => 
    [...transactions].filter(tx => tx.type === type).sort((a, b) => b.date.getTime() - a.date.getTime()), 
    [transactions, type]
  );
  
  if (loading) return <p>Cargando transacciones...</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Título</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead className="text-right">Importe</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredTxs.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell className="font-medium">{tx.title}</TableCell>
            <TableCell>{formatDate(tx.date)}</TableCell>
            <TableCell className="text-right">{formatCurrency(tx.amount)}</TableCell>
            <TableCell>
              <div className="flex gap-2 justify-end">
                <Button variant="ghost" size="icon" onClick={() => onEdit(tx)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => onDelete(tx.id)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function FinanzasPage() {
  const { addTransaction, updateTransaction, deleteTransaction } = useDashboard();
  const [editingIncome, setEditingIncome] = useState<Transaction | null>(null);
  const [editingExpense, setEditingExpense] = useState<Transaction | null>(null);
  const { toast } = useToast();

  const handleSave = (type: 'income' | 'expense') => async (data: TransactionFormValues) => {
    const editingTx = type === 'income' ? editingIncome : editingExpense;
    try {
      if(editingTx) {
        await updateTransaction(editingTx.id, {...data, type});
        toast({ title: "Transacción actualizada", description: "La transacción se ha guardado correctamente." });
      } else {
        await addTransaction({ ...data, type });
        toast({ title: "Transacción añadida", description: "La nueva transacción se ha guardado correctamente." });
      }
      type === 'income' ? setEditingIncome(null) : setEditingExpense(null);
    } catch (error) {
       toast({ variant: "destructive", title: "Error", description: "No se pudieron guardar los cambios." });
    }
  };

  const handleEdit = (type: 'income' | 'expense') => (tx: Transaction) => {
    if(type === 'income') {
        setEditingIncome(tx);
        setEditingExpense(null);
    } else {
        setEditingExpense(tx);
        setEditingIncome(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  const handleCancelEdit = (type: 'income' | 'expense') => () => {
    if (type === 'income') setEditingIncome(null);
    else setEditingExpense(null);
  }

  return (
    <Tabs defaultValue="income" className="space-y-4">
      <TabsList>
        <TabsTrigger value="income">Ingresos</TabsTrigger>
        <TabsTrigger value="expense">Gastos</TabsTrigger>
      </TabsList>
      
      <TabsContent value="income">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{editingIncome ? 'Editar Ingreso' : 'Registrar Ingreso / Factura Emitida'}</CardTitle>
            </CardHeader>
            <CardContent>
              <TransactionForm type="income" onSave={handleSave('income')} editingTransaction={editingIncome} cancelEdit={handleCancelEdit('income')}/>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Historial de Ingresos</CardTitle></CardHeader>
            <CardContent>
              <TransactionsTable type="income" onEdit={handleEdit('income')} onDelete={(id) => deleteTransaction(id)} />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      <TabsContent value="expense">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{editingExpense ? 'Editar Gasto' : 'Registrar Gasto / Factura Recibida'}</CardTitle>
            </CardHeader>
            <CardContent>
              <TransactionForm type="expense" onSave={handleSave('expense')} editingTransaction={editingExpense} cancelEdit={handleCancelEdit('expense')} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Historial de Gastos</CardTitle></CardHeader>
            <CardContent>
              <TransactionsTable type="expense" onEdit={handleEdit('expense')} onDelete={(id) => deleteTransaction(id)} />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}
