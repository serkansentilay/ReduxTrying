import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
   name: "counter",
   initialState: {
      count: 0,
      author: {
         name: "serkan",
         surname: "sentilay"
      }
   },
   reducers: {
      // increment(state){
      //    state.count++
      // }
      increment: state => {
         state.count += 1
      },
      decrement: state => {
         state.count -= 1
      },
      incrementByAmount: (state, action) => {
         state.count += action.payload
      },
      setAuthor: (state, action) => {
         state.author.name = action.payload.name
         state.author.surname = action.payload.surname
      }
   }
})

export const { increment, decrement, incrementByAmount, setAuthor } = counterSlice.actions

export default counterSlice.reducer
