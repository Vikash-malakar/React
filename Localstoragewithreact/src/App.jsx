import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Local from './local.jsx'
import Login from './Login.jsx'
import { Route, Routes } from "react-router-dom"  
import Sign from './signup.jsx'



function App() {  
  const [count, setCount] = useState(0)

  return (
    <>

 <Routes> 
            
        <Route index element={<Sign/>} />  
        <Route path='/login' element={<Login/>}/>          
        


            </Routes> 
        


  
    </>
  )
}

export default App
