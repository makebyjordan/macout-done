"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDashboard } from "@/hooks/use-dashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Star, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonialSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  review: z.string().min(10, "El comentario debe tener al menos 10 caracteres."),
  stars: z.number().min(1).max(5),
});

type TestimonialFormValues = z.infer<typeof testimonialSchema>;

export default function TestimoniosPage() {
  const { testimonials, addTestimonial, deleteTestimonial, loading } = useDashboard();
  const { toast } = useToast();

  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: "",
      review: "",
      stars: 5,
    },
  });

  const getAvatarFallback = (name: string) => {
    const parts = name.split(" ");
    if (parts.length > 1) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  const onSubmit = async (values: TestimonialFormValues) => {
    try {
      const avatar = getAvatarFallback(values.name);
      await addTestimonial({ ...values, avatar });
      toast({ title: "Testimonio añadido", description: "El nuevo testimonio se ha guardado." });
      form.reset();
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "No se pudo guardar el testimonio." });
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Añadir Nuevo Testimonio</CardTitle>
          <CardDescription>
            Rellena el formulario para añadir una nueva opinión de un cliente.
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
                    <FormLabel>Nombre del Cliente</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej. Laura G." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="review"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comentario</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Escribe aquí la opinión del cliente..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stars"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valoración</FormLabel>
                    <FormControl>
                        <div className="flex items-center gap-4">
                            <Slider
                                defaultValue={[field.value]}
                                min={1}
                                max={5}
                                step={1}
                                onValueChange={(value) => field.onChange(value[0])}
                                className="w-64"
                            />
                            <div className="flex text-yellow-400">
                                {[...Array(field.value)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                                {[...Array(5 - field.value)].map((_, i) => <Star key={i} className="h-5 w-5" />)}
                            </div>
                        </div>
                    </FormControl>
                    <FormDescription>
                      Mueve el deslizador para seleccionar de 1 a 5 estrellas.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={form.formState.isSubmitting} className="bg-gradient-to-r from-accent to-[hsl(var(--custom-yellow))] text-white">
                {form.formState.isSubmitting ? "Guardando..." : "Añadir Testimonio"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Listado de Testimonios</CardTitle>
        </CardHeader>
        <CardContent>
           {loading ? <p>Cargando testimonios...</p> : (
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Comentario</TableHead>
                    <TableHead>Valoración</TableHead>
                    <TableHead>Acciones</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {testimonials.map((testimonial) => (
                    <TableRow key={testimonial.id}>
                        <TableCell>
                           <div className="flex items-center gap-3">
                             <Avatar className="h-10 w-10">
                               <AvatarFallback className="bg-primary text-primary-foreground font-bold">{testimonial.avatar}</AvatarFallback>
                             </Avatar>
                             <span className="font-medium">{testimonial.name}</span>
                           </div>
                        </TableCell>
                        <TableCell className="max-w-md"><p className="line-clamp-2">{testimonial.review}</p></TableCell>
                        <TableCell>
                            <div className="flex text-yellow-400">
                                {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                            </div>
                        </TableCell>
                        <TableCell>
                            <Button variant="ghost" size="icon" onClick={() => deleteTestimonial(testimonial.id)}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
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
