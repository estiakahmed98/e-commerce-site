"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Upload } from "lucide-react"

export default function AddProductPage() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    purchasePrice: "",
    sellingPrice: "",
    stock: "",
    featured: false,
    has3d: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setProduct((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Product data:", product)
    // Here you would typically send the data to your API
    alert("Product added successfully!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/admin/products" className="mr-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Add New Product</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" name="name" value={product.name} onChange={handleInputChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={product.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="home-decor">Home Decor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing & Inventory</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="purchasePrice">Purchase Price ($)</Label>
                    <Input
                      id="purchasePrice"
                      name="purchasePrice"
                      type="number"
                      step="0.01"
                      min="0"
                      value={product.purchasePrice}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sellingPrice">Selling Price ($)</Label>
                    <Input
                      id="sellingPrice"
                      name="sellingPrice"
                      type="number"
                      step="0.01"
                      min="0"
                      value={product.sellingPrice}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stock">Stock Quantity</Label>
                  <Input
                    id="stock"
                    name="stock"
                    type="number"
                    min="0"
                    value={product.stock}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="featured">Featured Product</Label>
                    <p className="text-sm text-muted-foreground">Display this product on the homepage</p>
                  </div>
                  <Switch
                    id="featured"
                    checked={product.featured}
                    onCheckedChange={(checked) => handleSwitchChange("featured", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="has3d">3D Model Available</Label>
                    <p className="text-sm text-muted-foreground">Enable 3D view for this product</p>
                  </div>
                  <Switch
                    id="has3d"
                    checked={product.has3d}
                    onCheckedChange={(checked) => handleSwitchChange("has3d", checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop your images here, or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">Supports JPG, PNG, WEBP. Max 5MB each.</p>
                  <Button variant="outline" size="sm">
                    Upload Images
                  </Button>
                </div>
              </CardContent>
            </Card>

            {product.has3d && (
              <Card>
                <CardHeader>
                  <CardTitle>3D Model</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Upload your 3D model file</p>
                    <p className="text-xs text-muted-foreground mb-4">Supports GLB, GLTF. Max 20MB.</p>
                    <Button variant="outline" size="sm">
                      Upload 3D Model
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="flex justify-end space-x-4">
              <Button variant="outline" type="button">
                Save as Draft
              </Button>
              <Button type="submit">Add Product</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

