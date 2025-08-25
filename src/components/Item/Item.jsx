import React, { useContext } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/Shop'

const Item = ({image,price,name,id,products}) => {
  const {handleClick} = useContext(ShopContext)

  const slug = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  }


  return (
    <>
     <div className='card' >
        <Link to={`/product/${id}/${slug(name)}`} onClick={() => handleClick(products)}  >
            <img src={image} alt={name} />
        </Link>
        <p className="name"> {name} </p>
        <p className="price"> ₹{price} </p>
    </div> 
    </>
  )
}

export default Item

