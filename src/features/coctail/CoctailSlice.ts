import { createSlice } from "@reduxjs/toolkit"
import CoctailState from "./types/CoctailState"
import { loadCoctails } from "./CoctailAction"

const initial: CoctailState = { 
    coctails: { drinks: [] }, // Инициализация coctails как пустого объекта с массивом drinks
    isLoading: false,
    error: null,
}

export const coctailsSlice = createSlice({
  name: "coctails",
  initialState: initial,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(loadCoctails.pending, (state) => {
        // state.coctails.drinks = []
        state.isLoading = true
      })

      .addCase(loadCoctails.fulfilled, (state, action) => {
        state.isLoading = false
        state.coctails = action.payload
      })
      //rejected - промис вернулся с ощибкой
      .addCase(loadCoctails.rejected, (state, action) => {
        state.isLoading = false
        // state.coctails.drinks = []
        state.error = action.payload as string
      })
  },
})
