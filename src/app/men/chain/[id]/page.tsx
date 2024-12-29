
import Button from "@/components/Button";
import { ChainData } from "../../../../../Data/data";  // Assuming your data is here
import Image from "next/image";

interface Paramsin {
  params: {
    id: string;
  };
}

const page = ({ params }: Paramsin) => {
  const tonum = Number(params.id);
  const filter = ChainData.find((items) => items.id === tonum);

  // Ensure filter is defined before rendering
  if (!filter) {
    return <div>Product not found</div>;  // Handle case when the product is not found
  }

  return (
    <div className="text-purple-600 flex flex-col justify-center items-center m-4 gap-4 p-4 border rounded-md shadow-md max-w-[90%] sm:max-w-[400px] mx-auto">
      {/* Product Image */}
      <Image
        src={filter.img || "./img"}  // Ensure the fallback image path is valid
        alt="img"
        height={200}
        width={200}
        className="object-cover rounded-md"
      />

      {/* Product Title */}
      <p className="text-center text-lg sm:text-xl font-semibold">
        {filter.title}
      </p>

      {/* Product Price */}
      <h1 className="text-center text-xl sm:text-2xl font-bold">
        ${filter.price}  {/* Assuming price is a number, you can format it to show as currency */}
      </h1>

      {/* Add to Cart Button */}
      <Button
        productId={filter.id}  // Use filter instead of data
        productName={filter.title}  // Use filter.title for product name
        productPrice={filter.price}  // Use filter.price for product price
      />
    </div>
  );
};

export default page;