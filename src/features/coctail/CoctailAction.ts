import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const loadCoctails = createAsyncThunk(
  "coctail/loadCoctail",
  async (_, thankAPI) => {
    try {
      const res = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      )
      return res.data
    } catch (error: any) {
      return thankAPI.rejectWithValue(error.message)
    }
  },
)
