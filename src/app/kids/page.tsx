import Image from "next/image"
import Link from "next/link"
export default function Kids(){
    return(
        <div>
            <div className="text-center mt-5 mb-5">
                <h1 className="text-2xl text-pink-600 font-bold">Kids Essentials</h1>
                <Link href="/newborn">
          <Image
            src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734618947/WhatsApp_Image_2024-12-19_at_19.33.09_f30d258c_wkfrip.jpg"
            alt="New Arrival"
            className=" mt-8 ml-[400px] rounded-lg transition-transform duration-200 ease-in-out hover:scale-110"
            height={300}
            width={600}
          />
        <h1 className="text-2xl text-purple-600 mb-10 mt-5 mr-12 "> New born set</h1> 
        </Link> 
            </div>
            <div className="text-center mt-5 mb-5">
            
                <Link href="/kids/toy">
          <Image
            src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734618962/WhatsApp_Image_2024-12-19_at_19.27.43_9ddd4153_zv4cho.jpg"
            alt="New Arrival"
            className=" mt-20 ml-[400px] rounded-lg transition-transform duration-200 ease-in-out hover:scale-110"
            height={300}
            width={600}
          />
        <h1 className="text-2xl text-purple-600 mb-10 mt-10 mr-16"> Toys </h1> 
        </Link> 
            </div>
            <div className="text-center mt-5 mb-5">
            
                <Link href="/kids/jewelry">
          <Image
            src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734618955/WhatsApp_Image_2024-12-19_at_19.29.23_3d6f62e0_ijcmsp.jpg"
            alt="New Arrival"
            className=" mt-8 ml-[400px] rounded-lg transition-transform duration-200 ease-in-out hover:scale-110"
            height={300}
            width={600}
          />
        <h1 className="text-2xl text-purple-600 mb-10 mt-10 mr-24"> Baby Girls Jewelry </h1> 
        </Link> 
            </div>
            
        </div>
    )
}