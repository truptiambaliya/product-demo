import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProductDetailAPI, getproductsAPI } from "./productsAPI";
import ProductDetail from "./ProductDetails";

const initialState = {
    loading: false,
    data: {},
    ProductDetail: {
        loading: false,
        data: {}
    }
}

export const getAllProducts = createAsyncThunk("product/getAllProducts", async () => {
    try {
        const response = await getproductsAPI()
        if (response?.status == 200) {
            return response.data
        }
    } catch (error) {
        console.log(error.message);
    }
})

export const getProductDetail = createAsyncThunk("product/getProductDetail", async (ProductId) => {
    const response = await getProductDetailAPI(ProductId)
    if (response && response.status == 200) {
        return response.data
    }
})

const productslice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        }).addCase(getProductDetail.pending, (state) => {
            state.ProductDetail.loading = true
        }).addCase(getProductDetail.fulfilled, (state, action) => {
            state.ProductDetail.loading = false
            state.ProductDetail.data = action.payload
        })
    }
})

  export default productslice.reducer