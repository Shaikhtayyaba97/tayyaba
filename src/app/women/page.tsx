import Image from "next/image";
import Link from "next/link";

export default function Women() {
  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Header Section */}
      <h1 className="text-4xl text-center mt-8 text-purple-500 font-bold">Make-Up</h1>

      {/* First Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
        <div className="flex flex-col items-center">
          <Link href="women/all" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734548455/WhatsApp_Image_2024-12-18_at_23.59.55_46cf036f_jcqhwk.jpg"
              alt="Lipsticks"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={400}
            />
            <p className="mt-4 font-bold text-2xl text-purple-800 hover:text-purple-900">Lipsticks</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/lipstick" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734548516/WhatsApp_Image_2024-12-18_at_23.59.56_c5a921f3_gsuyf9.jpg"
              alt="Nail Paints"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={200}
            />
            <p className="mt-4 font-bold text-2xl text-purple-800 hover:text-purple-900">Nail Paints</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="women/foundation" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734548506/WhatsApp_Image_2024-12-18_at_23.59.56_cf348eb9_inohfp.jpg"
              alt="Foundations"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={400}
            />
            <p className="mt-4 font-bold text-2xl text-purple-800 hover:text-purple-900">Foundations</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="women/facepowder" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734548468/WhatsApp_Image_2024-12-18_at_23.59.55_2aa86d2c_jdfrrx.jpg"
              alt="women/facepowder"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={400}
            />
            <p className="mt-4 font-bold text-2xl text-purple-800 hover:text-purple-900">Face Powder</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/lipstick" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734548494/WhatsApp_Image_2024-12-18_at_23.59.56_72f966ff_jwqkx8.jpg"
              alt="Mascara"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={400}
            />
            <p className="mt-4 font-bold text-2xl text-purple-800 hover:text-purple-900">Mascara</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/lipstick" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734548485/WhatsApp_Image_2024-12-18_at_23.59.56_3764f7d4_w6xkwh.jpg"
              alt="Eyeliner"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={400}
            />
            <p className="mt-4 font-bold text-2xl text-purple-800 hover:text-purple-900">Eyeliner</p>
          </Link>
        </div>
      </div>

      {/* Second Header */}
      <h1 className="text-4xl text-center mt-16 text-purple-500 font-bold">Jewelry</h1>

      {/* Second Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
        <div className="flex flex-col items-center">
          <Link href="/lipstick" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734591170/WhatsApp_Image_2024-12-19_at_11.52.26_2ae6963f_ozxpbh.jpg"
              alt="Locket Set"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={350}
            />
            <p className="mt-4 font-bold text-2xl text-purple-800 hover:text-purple-900">Locket Set</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="women/ring" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734591195/WhatsApp_Image_2024-12-19_at_11.48.47_423e05e9_yqkowq.jpg"
              alt="Rings"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={400}
            />
            <p className="mt-4 font-bold text-2xl text-purple-800 hover:text-purple-900">Rings</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/lipstick" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734461244/4_pst70l.jpg"
              alt="Earrings"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={400}
            />
            <p className="mt-4 font-bold text-2xl text-purple-800 hover:text-purple-900">Earrings</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/lipstick" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734591187/WhatsApp_Image_2024-12-19_at_11.49.42_fc8bd0ac_vkvhdx.jpg"
              alt="Watches"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={400}
            />
            <p className="mt-4 font-bold text-2xl text-purple-800 hover:text-purple-900">Watches</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/lipstick" className="text-center">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734591181/WhatsApp_Image_2024-12-19_at_11.50.51_8205edde_hfocff.jpg"
              alt="Nails"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              height={200}
              width={400}
            />
            <p className="mt-4 font-bold text-2xl text-purple-800 hover:text-purple-900">Nails</p>
          </Link>
        </div>
      </div>
    </div>
  );
}