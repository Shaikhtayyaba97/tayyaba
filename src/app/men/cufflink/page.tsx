import React from "react";
import { CufflinkData } from "../../../../Data/data";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 m-4">
      {CufflinkData.map((data) => {
        return (
          <div
            key={data.id}
            className="text-amber-700 border border-gray-300 rounded-md p-4 shadow-md max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
          >
            {/* Product Image */}
            <Link href={`/men/cufflink/${data.id}`}>
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
            <div className="flex items-center gap-4">
      <button className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300">
        -
      </button>
      <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">
        Add to Cart
      </button>
      <button className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300">
        +
      </button>
    </div>

          </div>
        );
      })}
    </div>
  );
};

export default page;