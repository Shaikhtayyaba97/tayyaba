import { Facepowderdata } from "../../../../../Data/data"
import Image from "next/image"
interface Paramsin {
    params: {
        id: string
    }
}
const page = ({params} : Paramsin) => {
    const tonum = Number(params.id)
    const filter = Facepowderdata.find((items) => items.id === tonum)

  return (
    <div className=" text-purple-600 flex flex-col justify-center items-center m-4 gap-3">
      <Image src={filter?.img || './img' } alt='img' height={100} width={100}/>
       
        <p>{filter?.title}</p>
        <h1>{filter?.price}</h1>
        <button className='bg-purple-200 text-purple-950'>Add to card</button> 
    
    </div>
  )
}
export default page