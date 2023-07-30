import { useRouter } from "next/router";
import React from "react";

const categories = [
  {
    id: 1,
    title: "CPU / Processor",
    bg: "bg-red-300",
    route: "/category/CPU or Processor",
  },
  {
    id: 2,
    title: "Motherboard",
    bg: "bg-lime-300",
    route: "/category/Motherboard",
  },
  {
    id: 3,
    title: "RAM",
    bg: "bg-amber-300",
    route: "/category/RAM",
  },
  {
    id: 4,
    title: "Power Supply Unit",
    bg: "bg-teal-200",
    route: "category/Power Supply Unit",
  },
  {
    id: 5,
    title: "Storage Device",
    bg: "bg-orange-200",
    route: "/category/Storage Device",
  },
  {
    id: 6,
    title: "Monitor",
    bg: "bg-red-300",
    route: "/category/Monitor",
  },
  {
    id: 7,
    title: "Others",
    bg: "bg-lime-300",
    route: "/category/Others",
  },
];

export default function FeaturedCategories() {
  const router = useRouter();

  return (
    <div className="mt-16">
      <h1 className="text-2xl text-center font-bold">Categories</h1>
      <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-1 gap-5 mt-8">
        {categories.map((category) => (
          <div
            onClick={() => router.push(category.route)}
            key={category.id}
            className={`${category.bg} text-lg rounded-lg text-center font-semibold py-8 cursor-pointer`}
          >
            {category.title}
          </div>
        ))}
      </div>
    </div>
  );
}
