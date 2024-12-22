import React from 'react'
import { Facepowderdata } from '../../../../Data/data'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex justify-evenly m-4'>
        {Facepowderdata.map((data)=>{
            return(


                <div key={data.id} className='text-amber-700'>
        <Link href={`/women/facepowder/${data.id}`}>   <Image src={data.img || './img' } alt='img' height={100} width={100}/></Link>
        {data.description} <br />
        {data.price} <br />
        <button className='bg-purple-200 text-purple-950'>Add to cart</button>                </div>
            )
        })

        }
    </div>
  )
}

export default page