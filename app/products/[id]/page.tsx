import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import ProductViewer3D from "@/components/product-viewer-3d";
import RelatedProducts from "@/components/related-products";
import { ShoppingCart, ArrowLeft } from "lucide-react";

// Mock data - in a real app, this would come from your database
const getProduct = (id: string) => {
  return {
    id: Number.parseInt(id),
    name: "Premium Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals alike.",
    price: 199.99,
    purchasePrice: 120.0,
    stock: 45,
    category: "Electronics",
    images: ["/assets/heel.jpg", "/assets/heel.jpg", "/assets/heel.jpg"],
    has3d: true,
    specifications: [
      { name: "Connectivity", value: "Bluetooth 5.0" },
      { name: "Battery Life", value: "Up to 30 hours" },
      { name: "Noise Cancellation", value: "Active" },
      { name: "Weight", value: "250g" },
      { name: "Warranty", value: "2 years" },
    ],
  };
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);
  const profit = product.price - product.purchasePrice;
  const profitMargin = (profit / product.price) * 100;

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/products"
        className="inline-flex items-center mb-6 text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Tabs defaultValue="images">
            <TabsList className="mb-4">
              <TabsTrigger value="images">Images</TabsTrigger>
              {product.has3d && <TabsTrigger value="3d">3D View</TabsTrigger>}
            </TabsList>
            <TabsContent
              value="images"
              className="relative aspect-square bg-muted rounded-lg overflow-hidden"
            >
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain"
              />
            </TabsContent>
            {product.has3d && (
              <TabsContent value="3d" className="h-[500px]">
                <ProductViewer3D />
              </TabsContent>
            )}
          </Tabs>

          <div className="flex gap-4 mt-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="relative w-20 h-20 border rounded cursor-pointer overflow-hidden"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <Badge className="mb-2">{product.category}</Badge>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-1">Availability:</p>
            <p
              className={`font-medium ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock > 0
                ? `In Stock (${product.stock} available)`
                : "Out of Stock"}
            </p>
          </div>

          <Button size="lg" className="w-full mb-4">
            <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
          </Button>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Specifications</h3>
            <div className="space-y-2">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex border-b pb-2">
                  <span className="font-medium w-1/3">{spec.name}</span>
                  <span className="w-2/3">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <RelatedProducts
          categoryId={product.category}
          currentProductId={product.id}
        />
      </div>
    </div>
  );
}
