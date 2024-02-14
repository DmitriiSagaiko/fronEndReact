import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css"

function Layout() {
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}> 
        {/* Вместо outlet подставляется ссылка на страницу указанная в рутах App */}
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
