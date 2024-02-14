import { createSlice } from "@reduxjs/toolkit"
import { addUser } from "./userAction"


//создали начальные условия и типизировали их по продукт стейт
const initial = {
  name: "",
  job:"",
  isAdded:false,
  id:""
}


export const userSlice = createSlice({
  name: "user",
  initialState: initial,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.fulfilled, (state,action) => {
        state.id=action.payload.id
        state.name = action.payload.name
        state.isAdded=true
        state.job=action.payload.job
      })
  },
})
