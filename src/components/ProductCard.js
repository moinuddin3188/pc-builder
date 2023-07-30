import React from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "./ui/Rating";

export default function ProductCard({product}) {
  const {title, image, category, status, price, _id, reviews} = product

  const totalRating = reviews.reduce((accumulator, review) => accumulator + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <Image src={image} width={800} height={500} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
        </h2>
        <p>Category: {category}</p>
        <p>Status: {status}</p>
        <div className="flex items-center">
          <Rating rating={averageRating} /> <span className="ml-2 text-sm font-medium">{averageRating} ({reviews.length})</span>
        </div>
        <div className="card-actions justify-between items-center">
          <p className="text-xl font-bold">Tk {price}</p>
          <Link href={`/product/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
