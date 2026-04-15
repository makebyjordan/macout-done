import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import type { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 rounded-2xl border-2 border-transparent hover:border-primary hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            data-ai-hint="apple product"
            className="object-cover rounded-t-2xl"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <CardTitle className="font-headline text-lg mb-1 flex-grow font-bold">{product.name}</CardTitle>
        <Badge className="bg-secondary text-secondary-foreground w-fit mb-2">{formatCurrency(product.price)}</Badge>
        <CardDescription className="text-sm line-clamp-3 text-muted-foreground">{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
         <Button asChild className="w-full bg-primary text-primary-foreground rounded-full hover:bg-primary/90">
            <Link href={product.buyLink} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-4 w-4"/>
                Comprar
            </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
