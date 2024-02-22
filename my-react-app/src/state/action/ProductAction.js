import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";







export const getProducts = createAsyncThunk ('Product/AllProduct', async(_, {rejectWithValue}) => {
    
    try{
        const config = {
            headers: {'content-type': 'application/json'}
        }

        const {data} = await axios.get('http://127.0.0.1:8000/api/get_all_product/', 
        config
        );

      
        return data;
    }

    catch(error){
        return rejectWithValue(error.message)
    }
    

})


export const getProduct = createAsyncThunk ('Product/getProduct', async(id, {rejectWithValue}) => {
    
    try{
        const config = {
            headers: {'content-type': 'application/json'}
        }

        const {data} = await axios.get(`http://127.0.0.1:8000/api/get_product/${id}`, 
        config
        );

        localStorage.setItem('user/ info', JSON.stringify(data));
        return data;
    }

    catch(error){
        return rejectWithValue(error.message)
    }
    

})


