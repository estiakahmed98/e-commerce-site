import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Mock data - in a real app, this would come from your database
const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "/placeholder.svg?height=200&width=200",
    productCount: 42,
  },
  {
    id: 2,
    name: "Furniture",
    image: "/placeholder.svg?height=200&width=200",
    productCount: 38,
  },
  {
    id: 3,
    name: "Clothing",
    image: "/placeholder.svg?height=200&width=200",
    productCount: 56,
  },
  {
    id: 4,
    name: "Home Decor",
    image: "/placeholder.svg?height=200&width=200",
    productCount: 29,
  },
]

export default function CategoryShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/categories/${category.id}`}>
          <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
            <div className="relative aspect-square">
              <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold text-lg">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.productCount} products</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

