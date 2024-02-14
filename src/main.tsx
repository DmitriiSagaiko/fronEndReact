import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import Products from "./features/products/Products"
import Coctail from "./features/coctail/Coctail"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./component/layout/Layout"
import ErrorPage from "./component/ErrorPage"
import ProductPage from "./component/productPage/ProductPage"
import Product from "./component/product/Product"
import User from "./component/user/User"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <App /> */}
      {/* <Products/> */}
      {/* <Coctail /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1> Main page</h1>} />
          <Route path="productPage" element={<ProductPage />} />
          <Route path="productPage/:id" element={<Product />} />
          <Route path="user" element={<User />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
)
