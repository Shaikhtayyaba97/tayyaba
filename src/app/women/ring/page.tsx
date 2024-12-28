import React from "react";
import { Ringdata } from "../../../../Data/data";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";


const page = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 m-4">
      {Ringdata.map((data) => {
        return (
          <div
            key={data.id}
            className="text-amber-700 border border-gray-300 rounded-md p-4 shadow-md max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
          >
            {/* Product Image */}
            <Link href={`/women/ring/${data.id}`}>
              <Image
                src={data.img || "./img"}
                alt="img"
                height={200}
                width={200}
                className="object-cover rounded-md"
              />
            </Link>

            {/* Product Description */}
            <p className="text-center mt-2 text-sm sm:text-base font-medium">
              {data.description}
            </p>

            {/* Product Price */}
            <p className="text-center text-lg font-bold mt-1">{data.price}</p>

            {/* Add to Cart Button */}
            <Button
            productId={data.id}
            productName={data.title}
            productPrice={data.price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default page;