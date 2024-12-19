import Image from "next/image";
import { FiBarChart2 } from "react-icons/fi";
import { MdSmartToy } from "react-icons/md";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-purple-200 min-h-screen p-4">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center mt-8">
        <div className="flex-1">
          <Image
            src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734587785/WhatsApp_Image_2024-12-19_at_10.56.15_a1d9b9dc_mqljpw.jpg"
            alt="herosection"
            className="rounded-lg"
            height={300}
            width={600}
          />
        </div>
        <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0 lg:ml-8">
          <h1 className="text-4xl font-extrabold text-purple-700 flex items-center justify-center lg:justify-start">
            Welcome <FiBarChart2 className="ml-2" />
          </h1>
          <p className="mt-6 text-lg leading-relaxed">
            Discover the perfect blend of quality, style, and comfort at{" "}
            <i>A TO Z</i>. Explore our latest collection of products, e.g.,
            Make-up, Perfumes, Body Spray, Toys, and Accessories, crafted to
            suit every taste and occasion. Whether you are looking for timeless
            classics or modern essentials, we have got you covered. Shop now and
            experience elegance, durability, and affordability. All in one
            place.
          </p>
          <Button className="mt-6 bg-purple-700 text-white hover:bg-purple-600">
            View More
          </Button>
        </div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {/* Toy Varieties */}
        <div className="flex flex-col items-center">
          <Image
            src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734461230/3_pk1rjr.jpg"
            alt="Toy"
            className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg"
            width={300}
            height={300}
          />
          <p className="mt-4 text-lg font-semibold flex items-center">
            Toys Varieties <MdSmartToy className="ml-2" />
          </p>
        </div>

        {/* Make-Up Varieties */}
        <div className="flex flex-col items-center">
          <Image
            src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734461259/5_ctwv7r.jpg"
            alt="MakeUp"
            className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg"
            width={300}
            height={300}
          />
          <p className="mt-4 text-lg font-semibold flex items-center">
            MakeUp Varieties <MdSmartToy className="ml-2" />
          </p>
        </div>

        {/* Jewelry */}
        <div className="flex flex-col items-center">
          <Image
            src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734586918/WhatsApp_Image_2024-12-19_at_10.41.42_870b9cca_jipabo.jpg"
            alt="Jewelry"
            className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg"
            width={300}
            height={300}
          />
          <p className="mt-4 text-lg font-semibold flex items-center">
            Jewelry <MdSmartToy className="ml-2" />
          </p>
        </div>

        {/* Body Sprays */}
        <div className="flex flex-col items-center">
          <Image
            src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734586585/WhatsApp_Image_2024-12-19_at_10.33.34_c1dbe234_dwjl91.jpg"
            alt="Body Spray"
            className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg"
            width={300}
            height={300}
          />
          <p className="mt-4 text-lg font-semibold flex items-center">
            Body Sprays <MdSmartToy className="ml-2" />
          </p>
        </div>

        {/* Perfumes */}
        <div className="flex flex-col items-center">
          <Image
            src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734586546/WhatsApp_Image_2024-12-19_at_10.33.34_6da9643c_zcfdou.jpg"
            alt="Perfumes"
            className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg"
            width={300}
            height={300}
          />
          <p className="mt-4 text-lg font-semibold flex items-center">
            Perfumes <MdSmartToy className="ml-2" />
          </p>
        </div>

        {/* Baby Essentials */}
        <div className="flex flex-col items-center">
          <Image
            src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734586608/WhatsApp_Image_2024-12-19_at_10.33.33_f52aeb80_u70b2x.jpg"
            alt="Baby Essentials"
            className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg"
            width={300}
            height={300}
          />
          <p className="mt-4 text-lg font-semibold flex items-center">
            Baby Essentials <MdSmartToy className="ml-2" />
          </p>
        </div>
      </div>
    </div>
  );
}