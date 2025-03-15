"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

// Mock data - in a real app, this would come from your database
const recentOrders = [
  {
    id: "ORD-5523",
    customer: "John Smith",
    date: "2023-11-28",
    total: 249.99,
    status: "Delivered",
    items: 3,
  },
  {
    id: "ORD-5522",
    customer: "Sarah Johnson",
    date: "2023-11-27",
    total: 149.99,
    status: "Shipped",
    items: 1,
  },
  {
    id: "ORD-5521",
    customer: "Michael Brown",
    date: "2023-11-27",
    total: 329.98,
    status: "Processing",
    items: 2,
  },
  {
    id: "ORD-5520",
    customer: "Emily Davis",
    date: "2023-11-26",
    total: 89.99,
    status: "Delivered",
    items: 1,
  },
  {
    id: "ORD-5519",
    customer: "Robert Wilson",
    date: "2023-11-25",
    total: 199.97,
    status: "Delivered",
    items: 3,
  },
]

export default function AdminRecentOrders() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.items}</TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    order.status === "Delivered" ? "default" : order.status === "Shipped" ? "secondary" : "outline"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

