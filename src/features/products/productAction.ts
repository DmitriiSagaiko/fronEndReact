import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import IProduct from "./types/Products"

export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  //чтобы иметь доступ ко второму параметру, на место первого ставим _. Вместо это можно поставить state.
  async (_, thankAPI) => {
    try {
      //данные достанем с помощью библиотеки axios, чтобы упростить запрос
      const res = await axios.get("https://fakestoreapi.com/products/")
      return res.data
    } catch (error: any) {
      //поэтому мы и указали доступ ко второй переменной, чтобы достать error
      return thankAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id:number|undefined, thankAPI) => {
    try {
      const res = await axios.delete(`https://fakestoreapi.com/products/${id}`)
      return res.data
    } catch (error: any) {
      return thankAPI.rejectWithValue(error.message)
    }
  }
)

export const addProductToServer = createAsyncThunk(
  "product/addProductToServer",
  async (product:IProduct, thankAPI) => {
    try {
      const res = await axios.post("https://fakestoreapi.com/products", product)
      console.log(res.data);
      return res.data
    } catch (error: any) {
      return thankAPI.rejectWithValue(error.message)
    }
  }
)

