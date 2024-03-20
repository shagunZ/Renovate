import React from 'react'
import SideBar from './_components/SideBar'

const layout = ({children}) => {
  return (
    <div className='grid grid-cols-4 mt-8'>
        <div className=''>
            {/* side bar  */}
            <SideBar/>
        </div>
        <div className='col-span-3 bg-pink-100'>
            {children}
        </div>
    </div>
  )
}

export default layout