"use client";

import { useState } from "react";
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
import type { Product } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const productSchema = z.object({
  name: z.string().min(3, "El título debe tener al menos 3 caracteres."),
  description: z.string().min(10, "La descripción debe tener al menos 10 caracteres."),
  image: z.string().url("Debe ser una URL de imagen válida."),
  price: z.coerce.number().positive("El precio debe ser un número positivo."),
  buyLink: z.string().url("Debe ser una URL válida (ej. Wallapop)."),
});

export default function EquiposPage() {
  const { products, addProduct, updateProduct, deleteProduct, loading } = useDashboard();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      image: "https://picsum.photos/600/400",
      price: 0,
      buyLink: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof productSchema>) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, { ...values });
        toast({ title: "Equipo actualizado", description: "El equipo se ha guardado correctamente." });
      } else {
        await addProduct(values);
        toast({ title: "Equipo añadido", description: "El nuevo equipo se ha guardado correctamente." });
      }
      setEditingProduct(null);
      form.reset({ name: "", description: "", image: "https://picsum.photos/600/400", price: 0, buyLink: "" });
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "No se pudieron guardar los cambios." });
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    form.reset(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    form.reset({ name: "", description: "", image: "https://picsum.photos/600/400", price: 0, buyLink: "" });
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{editingProduct ? "Editar Equipo" : "Añadir Nuevo Equipo"}</CardTitle>
          <CardDescription>
            {editingProduct ? "Modifica los detalles del equipo." : "Rellena el formulario para añadir un nuevo equipo a la web."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título del Equipo</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej. MacBook Pro 13'' M2 512GB" {...field} />
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
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea placeholder="RAM, almacenamiento, estado, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Precio (€)</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.01" placeholder="1250" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="buyLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enlace de Compra</FormLabel>
                      <FormControl>
                        <Input placeholder="https://wallapop.com/item/..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL de la Foto</FormLabel>
                    <FormControl>
                      <Input placeholder="https://picsum.photos/600/400" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2">
                <Button type="submit" disabled={form.formState.isSubmitting} className="bg-gradient-to-r from-accent to-[hsl(var(--custom-yellow))] text-white">
                  {form.formState.isSubmitting ? "Guardando..." : (editingProduct ? "Actualizar Equipo" : "Añadir Equipo")}
                </Button>
                {editingProduct && (
                  <Button type="button" variant="ghost" onClick={handleCancelEdit}>
                    Cancelar
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Listado de Equipos</CardTitle>
        </CardHeader>
        <CardContent>
           {loading ? <p>Cargando equipos...</p> : (
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Imagen</TableHead>
                    <TableHead>Título</TableHead>
                    <TableHead>Precio</TableHead>
                    <TableHead>Acciones</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {[...products].reverse().map((product) => (
                    <TableRow key={product.id}>
                    <TableCell>
                        <Image
                        src={product.image}
                        alt={product.name}
                        width={60}
                        height={40}
                        className="rounded-md object-cover"
                        />
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className="font-medium">{formatCurrency(product.price)}</TableCell>
                    <TableCell>
                        <div className="flex gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}>
                            <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => deleteProduct(product.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                        </div>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
           )}
        </CardContent>
      </Card>
    </div>
  );
}
