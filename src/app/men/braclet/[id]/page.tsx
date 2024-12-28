import { BraceletData } from "../../../../../Data/data";
import Image from "next/image";

interface Paramsin {
  params: {
    id: string;
  };
}

const page = ({ params }: Paramsin) => {
  const tonum = Number(params.id);
  const filter = BraceletData.find((items) => items.id === tonum);

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
};

export default page;