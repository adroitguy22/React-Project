
import { createSlice } from "@reduxjs/toolkit";
import {  getProducts, getProduct } from "../action/ProductAction";





  
  
  export const productslice = createSlice({
    name: "product",
    initialState: {
            products:[],
            
            isRequest: false,
            isSuccess: false,
            errorMessage: "",
    },
    reducers: {
      resetProductsState: (state) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = "";
        state.data = null;
        
      },
    },
  
    
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state) => {
          state.isRequest = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
          state.isRequest = false;
          state.isSuccess = true;
          state.data = action.payload;
          state.products=state.data
      
        })
        .addCase(getProducts.rejected, (state, action) => {
          state.isRequest = false;
          state.isSuccess = false;
          state.errorMessage = action.payload;
        })
        
       
        ;
    },
  });
  
  


  export const getProductSlice = createSlice({
    name: "getProduct",
    initialState: {
            product:[],
            
            isRequest: false,
            isSuccess: false,
            errorMessage: "",
    },
    reducers: {
      resetProductState: (state) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = "";
        state.data = null;
        
      },
    },
  
    
    extraReducers: (builder) => {
      builder
        .addCase(getProduct.pending, (state) => {
          state.isRequest = true;
        })
        .addCase(getProduct.fulfilled, (state, action) => {
          state.isRequest = false;
          state.isSuccess = true;
          state.data = action.payload;
          state.product = state.data;
          
        })
        .addCase(getProduct.rejected, (state, action) => {
          state.isRequest = false;
          state.isSuccess = false;
          state.errorMessage = action.payload;
        })
        
       
        ;
    },
  });
  
  export const productReducer = getProductSlice.reducer
  export const {resetProductState} = getProductSlice
  
  export const productsReducer= productslice.reducer
  export const {resetProductsState} = productslice.actions
