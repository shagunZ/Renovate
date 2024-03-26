"use client"
import GlobalApi from '@/app/_services/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SideBar = () => {

    const [categoryList,setCategoryList]=useState([]);
    const [seletedCategory,setSelectedCategory]=useState([]);
    const params = usePathname();
// const category = params.split('/')[2];
  useEffect(()=>{
  getCategoryList();
  },[])

useEffect(()=>{
    params&&setSelectedCategory(params.split('/')[2]);
})
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
            {categoryList.map((category,index)=>(
               <Link href={'/search/'+category.name} key={index}
                className={`mb-3 md:mr-10 
                cursor-pointer 
                flex gap-2 p-3 
                border rounded-lg
                hover:bg-orange-50
                hover:shadow-md 
                hover:text-orange-900
                 hover:border-primary
                 ${seletedCategory==category.name&&'border-primary text-primary shadow-md bg-orange-50'}
                 `}>
                    <Image src={category.icon.url}
                    alt='icon'
                    width={30}
                    height={30}/>
                {category.name}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SideBar