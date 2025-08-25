import React, { useEffect } from 'react'
import ProductDis from '../components/ProductDis/ProductDis'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import { useParams } from 'react-router-dom'
import {all_product} from '../assets/all_Product.js'
import RelatedPro from '../components/RelatedProduct/RelatedPro.jsx'
const Product = () => {
  const {id,name} = useParams()

  useEffect(() => {
    const DocTitle = document.title;
    document.title = name;

    return () => {
      document.title = DocTitle
    }
  },[name])
  
  const productMatched = all_product.find(item => item.id === parseInt(id));

  
  return (
    <>
    <BreadCrumb product={productMatched} />
     <ProductDis  product={productMatched} /> 
     <RelatedPro />
    </>
  )
}

export default Product
