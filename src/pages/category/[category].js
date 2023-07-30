import ProductCard from "@/components/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import React from "react";

export default function ProductPage({ products }) {
  return (
    <section className="grid grid-cols-4 gap-8 py-10">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-backend.onrender.com/products");
  const products = await res.json();

  const paths = [];
  products.forEach((product) => {
    if (!paths.some((path) => path.params.category === product.category)) {
      paths.push({ params: { category: product.category } });
    }
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`https://pc-builder-backend.onrender.com/category/${params.category}`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};

ProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
