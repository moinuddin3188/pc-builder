import React from "react";
import { Carousel } from "antd";
import monitor from "../assets/images/monitor-1.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <Carousel autoplay className="mt-8">
      <div>
        <div className="grid grid-cols-2 gap-5 items-center">
          <div className="pr-5">
            <h1 className="text-5xl font-bold">Worlds Biggest PC Supplier</h1>
            <p className="mt-5 text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae voluptas, minima omnis eligendi nisi accusa.
            </p>
            <button className="py-2 px-8 font-medium rounded-md bg-lime-200 mt-5">LEARN MORE</button>
          </div>
          <div>
            <Image src={monitor} width={500} height={500} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-5 items-center">
          <div>
            <h1 className="text-5xl font-bold">Build Your Dream PC With Us</h1>
            <p className="mt-5 text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae voluptas, minima omnis eligendi nisi accusa.
            </p>
            <button className="py-2 px-8 font-medium rounded-md bg-lime-200 mt-5">LEARN MORE</button>
          </div>
          <div>
            <Image src={monitor} width={500} height={500} alt="" />
          </div>
        </div>
      </div>
    </Carousel>
  );
}
