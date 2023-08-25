import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
   country: [],
   loading: false
}

export const getCountry = createAsyncThunk('getCountry', async () => {
   const { data } = await axios.get("https://restcountries.com/v3.1/all")
   return data
})

export const countrySlice = createSlice({
   name: "countries",
   initialState,
   reducers: {
   },
   extraReducers: (builder) => {
      //at api apps, necessary timing
      builder.addCase(getCountry.pending, state => {
         state.loading = true
      })
      builder.addCase(getCountry.fulfilled, (state, action) => {
         state.country = action.payload
         state.loading = false
      })

   }
})

export default countrySlice.reducer
