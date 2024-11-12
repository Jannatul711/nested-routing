import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'
import Service from './pages/Service/Service'

function App() {

  return (
    <>
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Service/>} />
     </Routes>
    </BrowserRouter>
     

     
    </>
  )
}

export default App
