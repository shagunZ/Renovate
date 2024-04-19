'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";

export default function Home() {
 
  const [categoryList,setCategoryList]=useState([])
  const [businessList,setBusinessList]=useState([])
  useEffect(()=>{
  getCategoryList();
  getAllBusinessList();
  },[])


  // all category list 
  const getCategoryList =()=>{
    GlobalApi.getCategory().then(resp=>{
      console.log(resp.categorys)
      setCategoryList(resp.categorys);
    })
  }

  // all business lists 
  const getAllBusinessList =()=>{
    GlobalApi.getAllBusinessList().then(resp=>{
      console.log(resp.businessLists)
      setBusinessList(resp.businessLists);
    })
  }


  return (
   <div>
    <Hero/>
    <CategoryList categoryList = {categoryList}/>
    <BusinessList businessList = {businessList}
    title={"Services"}/>
   </div>
  );
}
