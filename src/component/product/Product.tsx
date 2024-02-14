import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import IProduct from "../productPage/types/ProductItem"
import styles from "./Product.module.css"
import MyButton from "../myButton/MyButton"

function Product(): JSX.Element {
  // Этот хук достает из адресной строки все что угодно и указано в App по названию. Мы и тут и там указали id. поэтому и можем ее достать
  const { id } = useParams();
  const initialValue: IProduct = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  };
  const [product, setProduct] = useState<IProduct>(initialValue);

  useEffect(() => {
    async function loadProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }
    loadProduct();
  }, []);
  return (
    <div>
      <h1>{[product.title]}</h1>
      <p>{product.description}</p>
      <div className={styles.imgWrapper}>
        <img src={product.image} alt="photo" />
      </div>
      <Link to={"/productPage"}><MyButton text={"В продукты"} /> </Link>
    </div>
  );
}

export default Product;
