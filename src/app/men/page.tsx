import Link from "next/link";
import Image from "next/image";

export default function Men() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-center mt-8 text-purple-500 font-bold">Men Essentials</h1>
      
      {/* Product Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Bracelets */}
        <div className="flex flex-col items-center">
          <Link href="/lipstick" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734592453/WhatsApp_Image_2024-12-19_at_12.09.39_664b7999_ylmi8k.jpg"
              alt="Bracelets"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={400}
            />
            <p className="mt-4 font-bold text-2xl text-purple-600 hover:text-purple-800">Bracelets</p>
          </Link>
        </div>

        {/* Watches */}
        <div className="flex flex-col items-center">
          <Link href="/lipstick" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734586598/WhatsApp_Image_2024-12-19_at_10.33.33_1e003ff9_aejphu.jpg"
              alt="Watches"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={400}
            />
            <p className="mt-4 font-bold text-2xl text-purple-600 hover:text-purple-800">Watches</p>
          </Link>
        </div>

        {/* Rings */}
        <div className="flex flex-col items-center">
          <Link href="/lipstick" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734592460/WhatsApp_Image_2024-12-19_at_12.10.14_3e33cd68_zsrqtr.jpg"
              alt="Rings"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={400}
            />
            <p className="mt-4 font-bold text-2xl text-purple-600 hover:text-purple-800">Rings</p>
          </Link>
        </div>
      </div>

      {/* New Arrival Section */}
      <div className="mt-16 flex flex-col items-center bg-orange-100 py-8">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-10 ">New Arrival</h1>
        <Link href="/lipstick" className="text-center">
          <Image
            src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734592447/WhatsApp_Image_2024-12-19_at_12.09.01_76fa7626_gv9oza.jpg"
            alt="New Arrival"
            className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
            height={300}
            width={600}
          />
        <h1 className="text-2xl text-purple-600 mb-10 mt-5"> Cufflinks</h1> 
        </Link> <br />
        <Link href="/lipstick" className="text-center">
          <Image
            src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734618967/WhatsApp_Image_2024-12-19_at_19.14.28_83842389_yaaea2.jpg"
            alt="New Arrival"
            className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
            height={300}
            width={600}
          />
          <h1 className="text-2xl text-purple-600 mb-10 mt-8"> Chains</h1>
        </Link>
      </div>
    </div>
  );
}