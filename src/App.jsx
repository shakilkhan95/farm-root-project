import './App.css'
import About from './components/About/About'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Products from './components/Products/Products'
import Testimonial from './components/Testimonial/Testimonial'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Features/>
      <Products/>
      <About/>
      <HowItWorks/>
      <Testimonial/>
      <Footer></Footer>
    </>
  )
}

export default App
