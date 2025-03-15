"use client"

import { useState } from "react"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Edit, Eye, MoreHorizontal, Search, Trash2 } from "lucide-react"

// Mock data - in a real app, this would come from your database
const productsData = [
  {
    id: 1,
    name: "Premium Headphones",
    image: "/placeholder.svg?height=50&width=50",
    category: "Electronics",
    stock: 45,
    purchasePrice: 120.0,
    sellingPrice: 199.99,
    has3d: true,
    featured: true,
  },
  {
    id: 2,
    name: "Ergonomic Chair",
    image: "/placeholder.svg?height=50&width=50",
    category: "Furniture",
    stock: 18,
    purchasePrice: 150.0,
    sellingPrice: 249.99,
    has3d: true,
    featured: true,
  },
  {
    id: 3,
    name: "Smart Watch",
    image: "/placeholder.svg?height=50&width=50",
    category: "Electronics",
    stock: 32,
    purchasePrice: 90.0,
    sellingPrice: 149.99,
    has3d: true,
    featured: true,
  },
  {
    id: 4,
    name: "Designer Lamp",
    image: "/placeholder.svg?height=50&width=50",
    category: "Home Decor",
    stock: 7,
    purchasePrice: 50.0,
    sellingPrice: 89.99,
    has3d: false,
    featured: true,
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    image: "/placeholder.svg?height=50&width=50",
    category: "Electronics",
    stock: 0,
    purchasePrice: 45.0,
    sellingPrice: 79.99,
    has3d: false,
    featured: false,
  },
]

export default function AdminProductsTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Purchase Price</TableHead>
              <TableHead>Selling Price</TableHead>
              <TableHead>Profit</TableHead>
              <TableHead>Features</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="relative h-10 w-10">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <span className={product.stock === 0 ? "text-red-500" : product.stock < 10 ? "text-amber-500" : ""}>
                    {product.stock}
                  </span>
                </TableCell>
                <TableCell>${product.purchasePrice.toFixed(2)}</TableCell>
                <TableCell>${product.sellingPrice.toFixed(2)}</TableCell>
                <TableCell>
                  ${(product.sellingPrice - product.purchasePrice).toFixed(2)}
                  <span className="text-xs text-muted-foreground ml-1">
                    ({(((product.sellingPrice - product.purchasePrice) / product.sellingPrice) * 100).toFixed(0)}%)
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {product.has3d && <Badge variant="outline">3D View</Badge>}
                    {product.featured && <Badge variant="outline">Featured</Badge>}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" /> View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

