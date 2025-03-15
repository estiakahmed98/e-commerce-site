"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Edit, Plus, Search, Trash2 } from "lucide-react"

// Mock data - in a real app, this would come from  Plus, Search, Trash2 } from "lucide-react";

// Mock data - in a real app, this would come from your database
const inventoryData = [
  {
    id: 1,
    name: "Premium Headphones",
    category: "Electronics",
    stock: 45,
    purchasePrice: 120.0,
    sellingPrice: 199.99,
    profit: 79.99,
    profitMargin: 40.0,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Ergonomic Chair",
    category: "Furniture",
    stock: 18,
    purchasePrice: 150.0,
    sellingPrice: 249.99,
    profit: 99.99,
    profitMargin: 40.0,
    status: "In Stock",
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    stock: 32,
    purchasePrice: 90.0,
    sellingPrice: 149.99,
    profit: 59.99,
    profitMargin: 40.0,
    status: "In Stock",
  },
  {
    id: 4,
    name: "Designer Lamp",
    category: "Home Decor",
    stock: 7,
    purchasePrice: 50.0,
    sellingPrice: 89.99,
    profit: 39.99,
    profitMargin: 44.44,
    status: "Low Stock",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    category: "Electronics",
    stock: 0,
    purchasePrice: 45.0,
    sellingPrice: 79.99,
    profit: 34.99,
    profitMargin: 43.74,
    status: "Out of Stock",
  },
]

export default function AdminInventoryTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredInventory = inventoryData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search inventory..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" /> Add Product
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Purchase Price</TableHead>
              <TableHead>Selling Price</TableHead>
              <TableHead>Profit</TableHead>
              <TableHead>Margin</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>${item.purchasePrice.toFixed(2)}</TableCell>
                <TableCell>${item.sellingPrice.toFixed(2)}</TableCell>
                <TableCell>${item.profit.toFixed(2)}</TableCell>
                <TableCell>{item.profitMargin.toFixed(2)}%</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "In Stock" ? "default" : item.status === "Low Stock" ? "warning" : "destructive"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

