import React from "react";
import { Facepowderdata } from "../../../../Data/data";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const page = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-8 bg-gray-50">
      {Facepowderdata.map((data) => {
        return (
          <div
            key={data.id}
            className="bg-white text-gray-800 border border-gray-200 rounded-lg p-4 shadow-lg max-w-[300px] hover:shadow-xl transition-shadow duration-300"
          >
            {/* Product Image */}
            <Link href={`/women/facepowfer/${data.id}`}>
              <Image
                src={data.img || "/default-img.png"} // Improved fallback image
                alt={data.title || "Product Image"} // Meaningful alt text
                height={200}
                width={200}
                className="object-cover rounded-lg w-full h-auto"
                priority // Optimized loading
              />
            </Link>

            {/* Product Description */}
            <p className="text-center mt-3 text-sm sm:text-base font-semibold text-gray-600">
              {data.description || "No description available"} {/* Fallback description */}
            </p>

            {/* Product Price */}
            <p className="text-center text-lg font-bold mt-2 text-gray-800">
              {data.price ? `$${data.price}` : "Price not available"}
            </p>

            {/* Add to Cart Button */}
            <div className="flex justify-center mt-4">
              <Button
                productId={data.id}
                productName={data.title}
                productPrice={data.price}
                className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-300"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;