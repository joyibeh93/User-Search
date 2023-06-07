import React from 'react'

function contact(props) {
  return (
    <div className='contacts-container'>
        <div className='contacts'>
                <div>
                    <img src={props.img} alt="staff-info" width={70}/>
                </div>
                <div className='contact-info'>
                  {props.id} 
                  <p className='contact-info2'>
                    {props.title}:
                    {props.lastname}
                    {props.firstname}
                  </p>
                </div>
        </div>
    </div>
    
  )
}

export default contact