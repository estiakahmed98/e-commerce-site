import Link from "next/link"
import { Button } from "@/components/ui/button"
import AdminProductsTable from "@/components/admin/admin-products-table"
import { Plus } from "lucide-react"

export default function AdminProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Product Management</h1>
        <Link href="/admin/products/add">
          <Button>
            <Plus className="h-4 w-4 mr-2" /> Add New Product
          </Button>
        </Link>
      </div>

      <AdminProductsTable />
    </div>
  )
}

