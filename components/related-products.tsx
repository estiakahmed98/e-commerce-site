"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

// Mock data - in a real app, this would come from your database
const getRelatedProducts = (category: string, currentProductId: number) => {
  return [
    {
      id: 3,
      name: "Smart Watch",
      price: 149.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Electronics",
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Electronics",
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Electronics",
    },
    {
      id: 9,
      name: "Tablet",
      price: 299.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Electronics",
    },
  ].filter((product) => product.id !== currentProductId)
}

export default function RelatedProducts({
  categoryId,
  currentProductId,
}: {
  categoryId: string
  currentProductId: number
}) {
  const relatedProducts = getRelatedProducts(categoryId, currentProductId)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="font-bold">${product.price.toFixed(2)}</p>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <ShoppingCart className="h-4 w-4 mr-2" /> Add
            </Button>
            <Link href={`/products/${product.id}`} className="flex-1">
              <Button variant="default" size="sm" className="w-full">
                View
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

