import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterProvider/counterSlice"
import countrySlice from "./Country/countrySlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        countries: countrySlice,
    }
})