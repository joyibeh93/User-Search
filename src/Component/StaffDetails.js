import React from 'react'
import Contact from './contact'
import Search from './Search'
import info from './StaffInfo'

function createStaffInfo(info){
    return <Contact
            img={info.imgUrl}
            key={info.id}
            id={info.id}
            title={info.title}
            lastname= {info.lastname}
            firstname={info.firstname}
            />
        
    
}

function StaffDetails() {
  return (
    <div className='staffContainer'>
         <Search/>
       
        <div className='staffContact'>
             <div className='staffContact'>
                {info.map(createStaffInfo)}
            </div>
        </div>
    
       

    </div>
    
  )
}

export default StaffDetails