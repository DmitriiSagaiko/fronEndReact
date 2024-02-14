import { createSlice } from "@reduxjs/toolkit"
import ProductState from "./types/ProductsState"
import { addProductToServer, deleteProduct, loadProducts } from "./productAction"

//создали начальные условия и типизировали их по продукт стейт
const initial: ProductState = {
  products: [],
  isLoading: false,
  error: null,
}

//создаем слайс с помощью функции createSlice
export const productSlice = createSlice({
  //даем уникальное имя
  name: "products",
  //задаем начальное значение
  initialState: initial,
  //подключаем reducers. Это функции для изменения стейта в store. Это подходит только для синхронных действий
  reducers: {},
  extraReducers: (builder) => {
    //тк запрос асинхронный, то он идет в extraReducer. При этом reducer должен быть хотя бы пустой
    // Пошел разбор всех вариантов при загрузке продуктов! таких вариантов всего 3
    builder
      //pending Ожидание промисса
      .addCase(loadProducts.pending, (state) => {
        state.products = []
        state.isLoading = true
      })
      //fulfilled - успех - промис вернулся с данными
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
      //rejected - промис вернулся с ощибкой
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false
        state.products = []
        state.error = action.payload as string
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(el => el.id !== action.payload.id)
      })
      .addCase(addProductToServer.fulfilled, (state,action)=> {
        state.products.unshift(action.payload)
      })
  },
})
