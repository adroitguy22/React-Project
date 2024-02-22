import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../action/AuthAction";



const userInfoFromStorage = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) : null

 

const initialState = {
  userInfo:  userInfoFromStorage,
  
  isRequest: false,
  isSuccess: false,
  errorMessage: "",
};


export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUsereState: (state) => {
      state.isRequest = false;
      state.isSuccess = false;
      state.errorMessage = "";
      state.data = null;
      localStorage.removeItem('userInfo')
      
    },
  },

  
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.data = action.payload;
        state.userInfo =action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      
     
      ;
  },
});


export const registerSlice = createSlice({
  name: "register",
  initialState:{
    userInfo:  userInfoFromStorage,
    isRequest: false,
    isSuccess: false,
    errorMessage: "",

  },
  reducers: {
    resetUserRegistertate: (state) => {
      state.isRequest = false;
      state.isSuccess = false;
      state.errorMessage = "";
      state.data = null;
      localStorage.removeItem('userInfo')
      localStorage.removeItem('userProfile')

 
    },
  },

  
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.data = action.payload;
        state.userInfo = state.data
      })
      .addCase(register.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      

  },
});



export const loginReducer = loginSlice.reducer;
export const {resetUsereState} = loginSlice.actions
export const registerReducer = registerSlice.reducer
export const {resetUserRegisterState} = registerSlice.actions