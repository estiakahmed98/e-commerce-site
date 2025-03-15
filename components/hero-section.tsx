import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-rose-100 via-purple-200 to-blue-300 py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md">
            Shop our collection of high-quality products with immersive 3D
            previews.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products">
              <Button size="lg">Shop Now</Button>
            </Link>
            <Link href="/categories">
              <Button size="lg" variant="outline">
                Browse Categories
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg text-muted-foreground">
                3D Product Preview
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
