import RootLayout from "@/components/layouts/RootLayout";
import Image from "next/image";
import React, { useState } from "react";
import monitor from "../../assets/images/monitor-1.webp";
import Rating from "@/components/ui/Rating";

export default function ProductDetailPage({product}) {
  const [activeTab, setActiveTab] = useState(1);

  const {title, image, reviews, category, price, status, brand, description, keyFeatures} = product

  const totalRating = reviews.reduce((accumulator, review) => accumulator + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  return (
    <>
      <section className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-16">
        <section className="shadow-lg p-16 rounded-md border-t-4 border-teal-300">
          <Image
            className="border"
            src={image}
            height={700}
            width={700}
            alt=""
          />
        </section>
        <section className="shadow-lg p-8 rounded-md border-t-4 border-orange-300">
          <h1 className="text-lg font-bold">{title}</h1>
          <Rating rating={averageRating} />
          <span className="ml-2 text-sm">{reviews.length} Reviews</span>
          <p className="mt-2">Category: {category}</p>
          <p className="mt-5 font-bold">Price Tk{price}</p>
          <p className="bg-green-500 px-3 py-1 my-5 text-white font-extrabold w-fit">
            {status}
          </p>
          <p className="font-medium">Brand: {brand}</p>
          <p className="mt-8 text-gray-600">
            {description}
          </p>
        </section>
      </section>

      <section className="shadow-lg p-8 rounded-md mt-8 border-t-4 border-orange-300">
        <div className="tabs">
          <a
            onClick={() => setActiveTab(1)}
            className={`tab font-semibold text-lg tab-lifted ${
              activeTab === 1 ? "tab-active bg-teal-300" : ""
            }`}
          >
            Specifications
          </a>
          <a
            onClick={() => setActiveTab(2)}
            className={`tab font-semibold text-lg tab-lifted ${
              activeTab === 2 ? "tab-active" : ""
            }`}
          >
            Review
          </a>
        </div>

        {activeTab === 1 ? (
          <div className="overflow-x-auto mt-8">
            <table className="table table-zebra">
              <tbody>
                {keyFeatures.map((feature) => (
                  <>
                    <tr key={feature.name}>
                      <td>{feature.name}</td>
                      <td>{feature.value}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          reviews.map((review, index) => (
            <div key={index + 1} className="mt-8 border-b pb-4">
              <h1 className="text-lg font-medium">
                {review.comment}
              </h1>
              <div className="flex items-center">
              <Rating rating={review.rating} />
              <p className="ml-2 text-sm">By: {review.username}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-backend.onrender.com/products")
  const products = await res.json()

  const paths = products.map(product => ({
    params: {productId: product._id}
  }))


  return {paths, fallback: false}
}

export const getStaticProps = async (context) => {
  const {params} = context

  const res = await fetch(`https://pc-builder-backend.onrender.com/products/${params.productId}`)
  const data = await res.json()

  return {
    props: {
      product: data
    }
  }
}

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
