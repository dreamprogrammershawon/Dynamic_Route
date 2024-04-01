import React from 'react'
import { blogsData } from '../layout/data'
import { Link } from 'react-router-dom'
const Adblog = () => {

const truncateString =(str,num)=>{
    if(str.length>num){
        return str.slice(0,num)+"..."
    }else{
        return str
    }
}

  return (
    <div>
        <h1>Addblog page</h1>
        <section>
       {
    blogsData.map((blog)=>{
        const {id,title,body} =blog
        return <div className='grid'  key={blog.id}>
            <h3>{title}</h3>
            <p>{truncateString(body,100)}</p>
            <Link to={title}>Learn More</Link>
        </div>
    })
}     
        </section>

    </div>
  )
}

export default Adblog