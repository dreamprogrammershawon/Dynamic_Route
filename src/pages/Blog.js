import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { blogsData } from '../layout/data'
const Blog = () => {
    const [bodyData,setBodyData]=useState('')
    const {title} = useParams()
    useEffect(()=>{
blogsData.filter((blog)=>blog.title===title)
setBodyData(blogsData[0].body)   
},[])
  return (
    <div>
<h1>{title} PAGE</h1>
<p>{bodyData.slice(0,500)}</p>
<p>{bodyData.slice(501,800)}</p>
    </div>
  )
}

export default Blog