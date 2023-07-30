import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import RootLayout from "@/components/layouts/RootLayout";

export default function HomePage({products}) {
  return (
    <>
      <Hero />
      <FeaturedProducts products={products} />
      <FeaturedCategories />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-backend.onrender.com/products/featured")
  const data = await res.json()

  return {
    props: {
      products: data
    }
  }
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
