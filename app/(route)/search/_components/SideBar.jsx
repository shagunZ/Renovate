"use client"
import GlobalApi from '@/app/_services/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const SideBar = () => {

    const [categoryList,setCategoryList]=useState([])
  const [businessList,setBusinessList]=useState([])
  useEffect(()=>{
  getCategoryList();
  },[])


  // all category list 
  const getCategoryList =()=>{
    GlobalApi.getCategory().then(resp=>{
      console.log(resp.categorys)
      setCategoryList(resp.categorys);
    })
  }

  return (
    <div>
        <h2 className='font-bond mb-3 text-lg text-primary'>
        ALL CATEGORIES
        </h2>

        <div>
            {categoryList.map((item,index)=>(
               <Link href={'/search/'+item.name} key={index}
                className='mb-3 md:mr-10 cursor-pointer flex gap-2 p-3 border rounded-lg
                hover:bg-orange-50
                hover:shadow-md hover:text-orange-900 hover:border-primary'>
                    <Image src={item.icon.url}
                    alt='icon'
                    width={30}
                    height={30}/>
                {item.name}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SideBar