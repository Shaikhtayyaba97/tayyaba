import Button from "@/components/Button";
import { ToyData } from "../../../../Data/data";// Assuming your data is here
import Image from "next/image";

interface Paramsin {
  params: {
    id: string;
  };
}

const page = ({ params }: Paramsin) => {
  const tonum = Number(params.id);
  const filter = ToyData.find((items) => items.id === tonum);

  // Ensure filter is defined before rendering
  if (!filter) {
    return (
      <div className="text-center text-red-600 font-semibold mt-10">
        Product not found
      </div>
    ); // Handle case when the product is not found
  }

  return (
    <div className="flex flex-col justify-center items-center m-4 gap-6 p-6 bg-white border border-gray-200 rounded-md shadow-md max-w-[95%] sm:max-w-[450px] mx-auto">
      {/* Product Image */}
      <Image
        src={filter.img || "/fallback-image.png"} // Ensure the fallback image path is valid
        alt="Product Image"
        height={250}
        width={250}
        className="object-cover rounded-lg"
      />

      {/* Product Title */}
      <p className="text-center text-lg sm:text-xl font-semibold text-gray-800">
        {filter.title}
      </p>

      {/* Product Price */}
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-purple-600">
        ${filter.price.toFixed(2)} {/* Format price to two decimal places */}
      </h1>

      {/* Add to Cart Button */}
      <Button
        productId={filter.id}
        productName={filter.title}
        productPrice={filter.price}
      />
    </div>
  );
};

export default page;