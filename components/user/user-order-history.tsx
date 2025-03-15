import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

// Mock data - in a real app, this would come from your database
const orderHistory = [
  {
    id: "ORD-5523",
    date: "2023-11-28",
    total: 249.99,
    status: "Delivered",
    items: 3,
  },
  {
    id: "ORD-5498",
    date: "2023-11-15",
    total: 149.99,
    status: "Delivered",
    items: 1,
  },
  {
    id: "ORD-5472",
    date: "2023-10-30",
    total: 329.98,
    status: "Delivered",
    items: 2,
  },
  {
    id: "ORD-5451",
    date: "2023-10-12",
    total: 89.99,
    status: "Delivered",
    items: 1,
  },
  {
    id: "ORD-5432",
    date: "2023-09-28",
    total: 199.97,
    status: "Delivered",
    items: 3,
  },
]

export default function UserOrderHistory() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderHistory.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
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
                <Link href={`/user/orders/${order.id}`}>
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

