import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import Home from './components/Layout/Home'
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import cartProductsLoader from './loaders/cartProductsLoader'
import Checkout from './components/Checkout/Checkout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Shop />
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: cartProductsLoader
      },
      {
        path: '/inventory',
        element: <Inventory />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
