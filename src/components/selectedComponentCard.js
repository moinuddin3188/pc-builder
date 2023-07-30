import Image from "next/image";
import React from "react";
import cardImage from "../assets/images/monitor-1.webp";
import Rating from "./ui/Rating";
import { useDispatch } from "react-redux";
import { removeFromPcBuilder } from "@/redux/features/pcBuilder/pcBuilderSlice";

export default function SelectedComponentCard({ product }) {
  const dispatch = useDispatch();

  const {image, title, price, reviews} = product

  const totalRating = reviews.reduce((accumulator, review) => accumulator + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  return (
    <div className="grid grid-cols-10 items-center p-5 border">
      <div className="flex items-center gap-8 col-span-8">
        <Image src={image} width={60} height={60} alt="" />
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <div className="flex items-center">
            <Rating rating={averageRating} />
            <p className="text-sm font-semibold">{reviews.length} Reviews</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold">Tk {price}</p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => dispatch(removeFromPcBuilder(product))}
          className="py-2 px-4 rounded-md border border-red-300"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
