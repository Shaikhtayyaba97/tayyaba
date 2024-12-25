import { RingData } from "../../../../../Data/data";
import Image from "next/image";

interface Paramsin {
  params: {
    id: string;
  };
}

const page = ({ params }: Paramsin) => {
  const tonum = Number(params.id);
  const filter = RingData.find((items) => items.id === tonum);

  return (
    <div className="text-purple-600 flex flex-col justify-center items-center m-4 gap-4 p-4 border rounded-md shadow-md max-w-[90%] sm:max-w-[400px] mx-auto">
      {/* Product Image */}
      <Image
        src={filter?.img || "./img"}
        alt="img"
        height={200}
        width={200}
        className="object-cover rounded-md"
      />

      {/* Product Title */}
      <p className="text-center text-lg sm:text-xl font-semibold">
        {filter?.title}
      </p>

      {/* Product Price */}
      <h1 className="text-center text-xl sm:text-2xl font-bold">
        {filter?.price}
      </h1>

      {/* Add to Cart Button */}
      <button className="bg-purple-200 text-purple-950 py-2 px-6 rounded hover:bg-purple-300 transition-all">
        Add to cart
      </button>
    </div>
  );
};

export default page;