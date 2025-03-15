import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, ShoppingBag, Package, Users, BarChart, Settings, MessageSquare } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-muted/40 p-4 hidden md:block">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>

        <nav className="space-y-1">
          <Link href="/admin/dashboard">
            <Button variant="ghost" className="w-full justify-start">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link href="/admin/products">
            <Button variant="ghost" className="w-full justify-start">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Products
            </Button>
          </Link>
          <Link href="/admin/orders">
            <Button variant="ghost" className="w-full justify-start">
              <Package className="mr-2 h-4 w-4" />
              Orders
            </Button>
          </Link>
          <Link href="/admin/customers">
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Customers
            </Button>
          </Link>
          <Link href="/admin/analytics">
            <Button variant="ghost" className="w-full justify-start">
              <BarChart className="mr-2 h-4 w-4" />
              Analytics
            </Button>
          </Link>
          <Link href="/admin/messages">
            <Button variant="ghost" className="w-full justify-start">
              <MessageSquare className="mr-2 h-4 w-4" />
              Messages
            </Button>
          </Link>
          <Link href="/admin/settings">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}

