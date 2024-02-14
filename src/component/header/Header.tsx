import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import { useAppSelector } from "../../app/hooks"

function Header() {
  const { products } = useAppSelector((state) => state.products)
  const result = (
    <div className={styles.navbar}>
      <NavLink to={"/"}>Home page</NavLink>
      <NavLink to={"productPage"}>ProductPage</NavLink>
      <NavLink to={"user"}>Users</NavLink>
      <span>осталось {products.length} товаров</span>
    </div>
  )
  return result
}

export default Header
