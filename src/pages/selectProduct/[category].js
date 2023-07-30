import SelectProductCard from "@/components/SelectProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import React from "react";

export default function ProductsPage({products}) {
  return (
    <section className="py-10">
      <h1 className="text-3xl text-center font-bold my-5">Add To Builder</h1>
      <div className="grid grid-cols-4 gap-8 ">
        {products.map(product => <SelectProductCard key={product._id} product={product} />)}
      </div>
    </section>
  );
}

export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(`https://pc-builder-backend.onrender.com/category/${params.category}`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};

ProductsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
