import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex gap-3 items-center flex-col justify-center pt-14 pb-7'>
        <h2 className='font-bold text-[46px] text-center'>Nearest Home 
        <span className='text-primary'> Service/Repair</span> 
        <br></br>Near You
        </h2>
        <h2 className='text-xl text-gray-400'>Find Home Service/ Repair Near You</h2>

        <div className='mt-4 flex gap-4 items-center'>
           <Input placeholder='Search' 
           className="rounded-full md:w-[350px]" /> 
           <Button className="rounded-full h-[45px]">
            <Search className="h-4 w-4"/>
           </Button>
        </div>
    </div>
  )
}

export default Hero