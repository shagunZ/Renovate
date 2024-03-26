"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_services/GlobalApi'
import BusinessList from '@/app/_components/BusinessList';
const BusinessByCategory = ({params}) => {
const [business,setBusinessList] = useState([]);
        useEffect(()=>{
            console.log(params);
            params&&getBusinessList();
          },[params])

  //get business by category
  const getBusinessList =()=>{
    GlobalApi.getBusinessByCategory(params.category)
    .then(resp=>{
      console.log(resp?.businessLists)
      setBusinessList(resp.businessLists);
    })
  }
  return (
    <div>
        <BusinessList title={params.category}
        businessList={business}/>
    </div>
  )
  }
export default BusinessByCategory