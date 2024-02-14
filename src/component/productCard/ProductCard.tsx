import React from 'react'

import IProduct from '../productPage/types/ProductItem'
import MyButton from "../myButton/MyButton"
import { Link } from 'react-router-dom'
import styles from "./Product.module.css"
import { useAppDispatch } from '../../app/hooks'
import { deleteProduct } from '../../features/products/productAction'


function ProductCard({id,title,image}:IProduct):JSX.Element {
  const dispatch = useAppDispatch()
  function deleteItem(id: any) {
    dispatch(deleteProduct(id))
  }
  return (
    <div>

    <li key={id} className={styles.productCard} >
      <span className={styles.title} >{title}</span>
      <div className={styles.imgWrapper} >
        <img src={image} alt="photo" />
      </div>
      <Link to={String(id)}>
        <MyButton text="to Product" />
      </Link>
      <MyButton text={'delete'} myClick={()=> deleteItem(id)} />
    </li>
    
    </div>
  )
}

export default ProductCard