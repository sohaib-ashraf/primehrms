import React, { Fragment } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const Layout = () => {
  return (
    <>
     
     <Router>
    <Header />
    <Routes>

    <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
   
    </Routes>
    <Footer />
  </Router>

  </>
  )
}

export default Layout;