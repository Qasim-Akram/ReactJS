import { HomePage } from './components/pages/Homepage'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<div>test check out </div>} />
      </Routes>
    </>
  )
}

export default App
