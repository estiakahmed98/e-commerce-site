import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminSalesChart from "@/components/admin/admin-sales-chart"
import AdminInventoryTable from "@/components/admin/admin-inventory-table"
import AdminProfitLossChart from "@/components/admin/admin-profit-loss-chart"
import AdminRecentOrders from "@/components/admin/admin-recent-orders"
import { DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <h3 className="text-2xl font-bold">$24,532.95</h3>
              <p className="text-xs text-green-600">+12.5% from last month</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Gross Profit</p>
              <h3 className="text-2xl font-bold">$9,234.32</h3>
              <p className="text-xs text-green-600">+8.2% from last month</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <ShoppingCart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Orders</p>
              <h3 className="text-2xl font-bold">342</h3>
              <p className="text-xs text-green-600">+18.3% from last month</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Low Stock Items</p>
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-xs text-red-600">5 items need reordering</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <AdminSalesChart />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Profit & Loss</CardTitle>
          </CardHeader>
          <CardContent>
            <AdminProfitLossChart />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="inventory" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="orders">Recent Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="inventory">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Management</CardTitle>
            </CardHeader>
            <CardContent>
              <AdminInventoryTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <AdminRecentOrders />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

