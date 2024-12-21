import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
function App() {

  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
