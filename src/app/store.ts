import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import { productSlice } from "../features/products/productSlice"
import { coctailsSlice } from "../features/coctail/CoctailSlice"
import { userSlice } from "../component/user/userSlice"

//в store хранятся данные из всего react-приложения
//они изменяются с помощью функции reducer в которую передается Action
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    //здесь продолжаем писать фичи
    // feature: feaureReducer/ или featuranameSlice
    products: productSlice.reducer,
    coctail: coctailsSlice.reducer,
    user: userSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
