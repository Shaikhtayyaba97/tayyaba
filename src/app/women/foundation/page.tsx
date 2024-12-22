import React from 'react'
import { Foundationdata } from '../../../../Data/data'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex justify-evenly m-4'>
        {Foundationdata.map((data)=>{
            return(


                <div key={data.id} className='text-amber-700'>
        <Link href={`/women/foundation/${data.id}`}>   <Image src={data.img || './img' } alt='img' height={100} width={100}/></Link>
        {data.description} <br />
        {data.price} <br />
        <button className='bg-purple-200 text-purple-950'>Add to card</button>                </div>
            )
        })

        }
    </div>
  )
}

export default page