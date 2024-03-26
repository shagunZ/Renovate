import React from 'react'
import SideBar from './_components/SideBar'

const layout = ({children}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 mt-8'>
        <div className='hidden md:block'>
            {/* side bar  */}
            <SideBar/>
        </div>
        <div className='md:col-span-3'>
            {children}
        </div>
    </div>
  )
}

export default layout