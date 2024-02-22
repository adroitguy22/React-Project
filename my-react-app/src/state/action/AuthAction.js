import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk ('auth/login', async({email, password}, {rejectWithValue}) => {
    console.log(email, password)
    try{
        const config = {
            headers: {'content-type': 'application/json'}
        }

        const {data} = await axios.post('http://127.0.0.1:8000/api/login/', {'username': email, 'password': password},
        config
        );

        localStorage.setItem('user/ info', JSON.stringify(data));
        return data;
    }

    catch(error){
        return rejectWithValue(error.message)
    }
    

})

export const register = createAsyncThunk('auth/register', async ({ name,email, password }, { rejectWithValue }) => {

    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
              
            }
        }
        

        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/auth/registernew/',
            { 'name': name,'email':email,'password': password },
            config
        );



     
        
        localStorage.setItem('userInfo', JSON.stringify(data));
        //localforage.setItem('userInfo', JSON.stringify(data))
        
    
        return data;

        

    } catch (error) {
        return rejectWithValue(error.message);
    }
});