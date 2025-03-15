"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import UserOrderHistory from "@/components/user/user-order-history"

export default function UserProfilePage() {
  const [user, setUser] = useState({
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Anytown, USA",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <Button variant="outline" className="mt-4 w-full">
                Change Avatar
              </Button>
            </div>

            <div className="mt-8 space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Orders
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Addresses
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Payment Methods
              </Button>
              <Button variant="ghost" className="w-full justify-start text-red-600">
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-3">
          <Tabs defaultValue="profile">
            <TabsList className="mb-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Order History</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" value={user.name} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" value={user.email} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" value={user.phone} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" name="address" value={user.address} onChange={handleInputChange} />
                      </div>
                    </div>
                    <Button className="mt-4">Save Changes</Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Change your password here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div></div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                    <Button className="mt-4">Update Password</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View your past orders and their status.</CardDescription>
                </CardHeader>
                <CardContent>
                  <UserOrderHistory />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="addresses">
              <Card>
                <CardHeader>
                  <CardTitle>Saved Addresses</CardTitle>
                  <CardDescription>Manage your shipping and billing addresses.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">Home</CardTitle>
                          <Badge>Default</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>John Smith</p>
                        <p>123 Main St</p>
                        <p>Anytown, CA 12345</p>
                        <p>United States</p>
                        <p>+1 (555) 123-4567</p>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Work</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>John Smith</p>
                        <p>456 Office Blvd</p>
                        <p>Business City, CA 54321</p>
                        <p>United States</p>
                        <p>+1 (555) 987-6543</p>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">
                            Delete
                          </Button>
                          <Button variant="outline" size="sm">
                            Set as Default
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-dashed flex items-center justify-center p-6 h-full">
                      <Button variant="outline">Add New Address</Button>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

