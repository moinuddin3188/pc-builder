import React from "react";
import ProductCard from "./ProductCard";

export default function FeaturedProducts({ products }) {
  return (
    <section className="py-10">
      <h1 className="text-3xl text-center font-bold my-5">Featured Products</h1>
      <div className="grid grid-cols-4 gap-8 ">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
