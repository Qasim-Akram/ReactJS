import { HomePage } from './components/pages/Homepage'
import { Routes, Route } from 'react-router'
import { CheckoutPage } from './components/pages/CheckoutPage'
import { OrdersPage } from './components/pages/OrdersPage'
import { TrackingPage } from './components/pages/TrackingPage'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/tracking" element={<TrackingPage />} />

      </Routes>
    </>
  )
}

export default App
