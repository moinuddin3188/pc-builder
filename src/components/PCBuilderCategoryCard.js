import Image from "next/image";
import React from "react";
import cardImage from "../assets/images/cpu.png";
import Link from "next/link";

export default function PCBuilderCategoryCard({ category }) {
  const { title, route } = category;

  return (
    <div className="flex justify-between items-center p-5 border">
      <div className="flex items-center gap-8">
        <Image src={cardImage} width={60} height={60} alt="" />
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <Link href={route}>
        <button className="py-2 px-4 rounded-md border border-lime-300">
          Select
        </button>
      </Link>
    </div>
  );
}
