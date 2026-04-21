import { HomePage } from './components/pages/Homepage'
import { Routes, Route } from 'react-router'
import './App.css'
import { CheckoutPage } from './components/pages/CheckoutPage'

function App() {


  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  )
}

export default App
