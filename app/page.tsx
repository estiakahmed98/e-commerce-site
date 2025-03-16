import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import HeroSection from "@/components/hero-section"
import CategoryShowcase from "@/components/category-showcase"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <FeaturedProducts />

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <CategoryShowcase />
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Products in 3D</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            View our products in immersive 3D to get a better feel before you buy.
          </p>
          <Link href="/products">
            <Button size="lg" className="mt-4">
              Browse All Products
            </Button>
          </Link>
        </div>
       <div>
        <Footer/>
        </div> 
      </div>
    </main>
  )
}

