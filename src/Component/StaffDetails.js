import React from 'react'
import Contact from './contact'
import Staffs from './StaffInfo'

function createStaffInfo(staff){
    return <Contact
            img={staff.imgUrl}
            key={staff.id}
            id={staff.id}
            title={staff.title}
            lastname= {staff.lastname}
            firstname={staff.firstname}
            />
        
    
}

function StaffDetails(props) {
  
  return (
    <div className='staffContainer'>

       
        <div className='staffContact'>
             <div className='staffContact'>
                {Staffs.filter(staff=>staff.firstname.toLocaleLowerCase().includes(props.data)).map(createStaffInfo)}
            </div>
        </div>
    
       

    </div>
    
  )
}

export default StaffDetails