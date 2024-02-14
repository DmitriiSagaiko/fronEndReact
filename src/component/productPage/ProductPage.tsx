import React, { useEffect, useState } from "react"
import IProduct from "./types/ProductItem"
import styles from "./ProductPage.module.css"
import MyButton from "../myButton/MyButton"
import { Link } from "react-router-dom"
import ProductCard from "../productCard/ProductCard"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { loadProducts } from "../../features/products/productAction"
import ProductForm from "../../features/products/productForm/ProductForm"
import { Audio } from "react-loader-spinner"

function ProductPage() {
  const { products, error, isLoading } = useAppSelector(
    (state) => state.products,
  )

  const dispatch = useAppDispatch()
  useEffect(() => {
    //это валидно только для асинхронных действий
    //передаем в диспатч нашу фичу по названию, в данном случае это loadProducts и ВЫЗЫВАЕМ ее как функцию
    dispatch(loadProducts())
  }, [])
  // создаем пустой массив из IProduct

  return (
    <div>
      {isLoading && <Audio height="80" width="80"/>}
      {!isLoading && (
        <>
          <ProductForm />
          <ul className={styles.productList}>
            {products.map((el) => (
              <ProductCard
                id={el.id}
                title={el.title}
                description={el.description}
                image={el.image}
                key={el.id}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default ProductPage
