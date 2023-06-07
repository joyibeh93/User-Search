import React,{useState}from 'react'
import StaffDetails from './StaffDetails';


function Search() {
  const [search,setSearch]=useState("");

  function handleSubmit(event){
    setSearch(event.target.value)
    
  }
  console.log(search)
  return (
    <div>
        <form class="form-search">
          <div>
             <input type='text' placeholder='Search by Name' className='form' onChange={handleSubmit}/>
          </div>
            
        </form>
        <StaffDetails data={search}/>
    </div>
  )
}

export default Search