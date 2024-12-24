import React from "react";
import { Lipstickdata } from "../../../../Data/data";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 m-4">
      {Lipstickdata.map((data) => {
        return (
          <div
            key={data.id}
            className="text-amber-700 border border-gray-300 rounded-md p-4 shadow-md max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
          >
            {/* Product Image */}
            <Link href={`/women/all/${data.id}`}>
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
            <button className="bg-purple-200 text-purple-950 w-full py-2 mt-4 rounded hover:bg-purple-300 transition-all">
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default page;