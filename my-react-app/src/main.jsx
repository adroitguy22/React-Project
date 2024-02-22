import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import store from './state/Store.js'
import { Provider } from 'react-redux'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Loginpage from './login/Loginpage.jsx'
import Register from './register/Register.jsx'
import Home from './home/Home.jsx'
import ProductDetails from './productDetails/ProductDetails.jsx'






const router = createBrowserRouter([
  {

    path: 'Loginpage',
    element: <Loginpage/>,

  },

  {
    
    path: 'Register',
    element: <Register/>,
  },

  {
    path: 'Home',
    element: <Home/>,
  },

  {
    path: '/Product/:id',
    element: <ProductDetails/>,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router= {router} />

    </Provider>

  </React.StrictMode>
)
