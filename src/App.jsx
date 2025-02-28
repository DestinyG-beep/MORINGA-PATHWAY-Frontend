import { useState } from 'react'
import './App.css'
import { ContactUs } from './pages/ContactUs/ContactUs.jsx'
import { LogIn } from './pages/LogIn/LogIn'



import { AboutUs } from './pages/AboutUs/AboutUs'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Navbar/>,
    
    <ContactUs/>,
    <LogIn/>,
    <AboutUs/>
  )
}

export default App