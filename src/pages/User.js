import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'


const User = () => {
const [searchParams,setSearchParams] =useSearchParams()
const [name,setName]=useState('')  
const handleChange =(e)=>{
    setName(e.target.value)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    setSearchParams({name:name})
}
return (
    <form onSubmit={handleSubmit}>
<input type="text"value={name} onChange={handleChange} />
    <button type='submit'>Add User</button>
    </form>
  )
}

export default User