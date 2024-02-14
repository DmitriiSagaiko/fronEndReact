import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk(
    "user/addUser",
    async (user:{name:string,job:string}, thankAPI) => {
      try {
        const res = await axios.post("https://reqres.in/api/users", user)
        console.log(res.data);
        return res.data
      } catch (error: any) {
        return thankAPI.rejectWithValue(error.message)
      }
    }
  )