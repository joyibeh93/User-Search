import React from 'react'
import Contact from './contact'
import Search from './Search'
import info from './StaffInfo'


function StaffDetails() {
  return (
    <div className='staffContainer'>
         <Search/>
       
        <div className='staffContact'>
             <div>
            
                <Contact 
                    imgUrl={info[0].imgUrl}
                    id={info[0].id}
                    title={info[0].title}
                    lastname= {info[0].lastname}
                    firstname={info[0].firstname}
                />
                <Contact 
                    imgUrl={info[1].imgUrl}
                    id={info[1].id}
                    title={info[1].title}
                    lastname= {info[1].lastname}
                    firstname={info[1].firstname}
                />
               <Contact 
                    imgUrl={info[2].imgUrl}
                    id={info[2].id}
                    title={info[2].title}
                    lastname= {info[2].lastname}
                    firstname={info[2].firstname}
                />
            </div>
            <div>
                <Contact 
                    imgUrl={info[3].imgUrl}
                    id={info[3].id}
                    title={info[3].title}
                    lastname= {info[3].lastname}
                    firstname={info[3].firstname}
                />
                 <Contact 
                    imgUrl={info[4].imgUrl}
                    id={info[4].id}
                    title={info[4].title}
                    lastname= {info[4].lastname}
                    firstname={info[4].firstname}
                />
                 <Contact 
                    imgUrl={info[5].imgUrl}
                    id={info[5].id}
                    title={info[5].title}
                    lastname= {info[5].lastname}
                    firstname={info[5].firstname}
                />
            </div>
        </div>
    
       

    </div>
    
  )
}

export default StaffDetails