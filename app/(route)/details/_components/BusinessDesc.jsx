import Image from 'next/image'
import React from 'react'

const BusinessDesc = ({business}) => {
  return business?.name&& (
    <div>
        <h2 className='font-bold text-[25px] mt-16'>Description</h2>
        <p className='mt-4 text-lg text-gray-700'>{business.about}</p>
    
    <h2 className='font-bold text-[25px] mt-8'>{business.category.name} at your DoorStep</h2>
    
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-4'> 
    {business?.images?.map((item,index)=>(
        <Image src={item?.url} key={index} alt='image'
        width={700} height={200} className='rounded-lg'/>
        ))}
        </div>
    </div>
  )
}

export default BusinessDesc