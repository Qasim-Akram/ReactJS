import axios from 'axios';
import { HomePage } from './pages/home/Homepage'
import { Routes, Route } from 'react-router'
import { CheckoutPage } from './pages/checkout/checkoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
    }
    fetchAppData();
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage cart={cart} />} />
        <Route path="/tracking" element={<TrackingPage />} />

      </Routes>
    </>
  )
}

export default App
