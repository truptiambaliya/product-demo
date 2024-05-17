import { configureStore } from "@reduxjs/toolkit";
import productReduser from "../features/products/productslice"

export const store = configureStore({
    reducer: {
        product: productReduser,
    },
});