import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({product}) => {
  return (
    <div className='container1' >
      <nav style={{fontSize:"20px",color:"#000",fontWeight:"600",cursor:"pointer",}} >
        <Link to='/'  style={{color:"black"}} >Home</Link>  &gt; <span> {product.category} </span> 
      </nav>
    </div>
  )
}

export default BreadCrumb
  