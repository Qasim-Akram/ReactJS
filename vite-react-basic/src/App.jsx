import { useState } from 'react'
import  JustChecking from './Check.jsx'
import ComponentA from './components/componentA.jsx'
import { UserProvider } from "./context/contex"
import ComponentC from './components/componentC.jsx'

function App() {
  

  return (
    <>
     {/*<JustChecking/>
     <h1>Just checking the vite react project for the first time </h1>*/}
     <UserProvider value={"This is context checking from provider is componrntA and Consumer is componentC  "}> 
     <ComponentA />
     </UserProvider>
     
     </>
  )
}

export default App
