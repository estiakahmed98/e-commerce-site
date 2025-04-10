"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, EyeIcon as Eye3d } from "lucide-react";

// Mock data - in a real app, this would come from your database
const featuredProducts = [
  {
    id: 1,
    name: "Men's Loafer",
    price: 2770.00,
    image: "/images/Shoes.webp",
    category: "Men's",
    has3d: true,
  },
  {
    id: 2,
    name: "Wedge-Heel Sandal",
    price: 1274.99,
    image: "/images/ladiesheel.webp",
    category: "Women's",
    has3d: true,
  },
  {
    id: 3,
    name: "Child Boys Sandal ",
    price: 974.00,
    image: "/images/childsandal.avif",
    category: "children",
    has3d: true,
  },
  {
    id: 4,
    name: "Belt Sandal for Kids",
    price: 1874.50,
    image: "/images/sandalkids.webp",
    category: "kids",
    has3d: false,
  },
];

export default function FeaturedProducts() {
  const [addedToCart, setAddedToCart] = useState<Record<number, boolean>>({});

  const handleAddToCart = (productId: number) => {
    setAddedToCart((prev) => ({ ...prev, [productId]: true }));

    // Reset the "Added" state after 2 seconds
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [productId]: false }));
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {product.has3d && (
              <Badge className="absolute top-2 right-2 bg-primary">
                <Eye3d className="h-3 w-3 mr-1" /> 3D View
              </Badge>
            )}
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>
              </div>
              <p className="font-bold">TK {product.price.toFixed(2)}</p>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex gap-2">
            <Button
              variant="default"
              className="flex-1"
              onClick={() => handleAddToCart(product.id)}
            >
              {addedToCart[product.id] ? (
                "Added!"
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                </>
              )}
            </Button>
            <Link href={`/products/${product.id}`} className="flex-1">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
