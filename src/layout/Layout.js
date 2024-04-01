import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <nav>
<Link className='link' to='/'>Home</Link>
<Link className='link' to='/about'> About</Link>
<Link className='link' to='/addblog'> AddBlog</Link>
    </nav>
  )
}

export default Layout