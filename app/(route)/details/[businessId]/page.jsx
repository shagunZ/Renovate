"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import { signIn,useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import BusinessInfo from '../_components/BusinessInfo';
import SuggestedBList from '../_components/SuggestedBList';
import BusinessDesc from '../_components/BusinessDesc';

const businessDetail = ({params}) => {
    const {data,status}=useSession();
const [business,setBusiness]=useState([]);    

    useEffect(()=>{
      params&&getBusinessById()
    },[params])

    useEffect(()=>{
checkUserAuth();
    },[]);

    const getBusinessById=()=>{
      GlobalApi.getBusinessById(params.businessId).then(resp=>{
        console.log(resp.businessList)
        console.log(resp.businessList.name)
        console.log(resp.businessList.about)
        setBusiness(resp.businessList)
      })
  }

    const checkUserAuth=()=>{
      if(status=='loading'){
        return <p>Loading...</p>
    }
    if(status=='unauthenticated'){
      console.log("blaa");
        signIn('descope')
    }
    }


  return status=='authenticated'&&business&&(
    <div className='py-8 md:py-20 px-10 md:px-36'>
      <BusinessInfo business={business}/>

<div className='grid grid-cols-3 mt-16'>
  <div className='col-span-3 md:col-span-2 order-last md:order-first'>
<BusinessDesc business={business}/>
  </div>
  <div className='hidded md:block'>
<SuggestedBList business={business}/>
  </div>
</div>


    </div>
  )
}

export default businessDetail