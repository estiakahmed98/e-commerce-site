import React from "react";
import Link from "next/link";

const categories = [
  { name: "Men's", slug: "mens", image: "/images/men.png" },
  { name: "Women's", slug: "womens", image: "/images/women.jpg" },
  { name: "Kids ", slug: "kids", image: "/images/child.png" },
  { name: "Children", slug: "children", image: "/images/kids.jpg" },
];

const CategoriesPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Explore Our Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition duration-300 hover:scale-105">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-64 object-cover group-hover:brightness-75 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
                <h2 className="text-2xl font-semibold text-white">{category.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;