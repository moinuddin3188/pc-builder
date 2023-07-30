import Image from 'next/image'
import React from 'react'
import Rating from './ui/Rating'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { addToPcBuilder } from '@/redux/features/pcBuilder/pcBuilderSlice';

export default function SelectProductCard({product}) {
  const {title, image, category, status, price, _id, reviews} = product

  const totalRating = reviews.reduce((accumulator, review) => accumulator + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  const dispatch = useDispatch()

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
          <Link href={`/buildPC`}>
            <button onClick={() => dispatch(addToPcBuilder(product))} className="btn btn-primary">Add To Builder</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
