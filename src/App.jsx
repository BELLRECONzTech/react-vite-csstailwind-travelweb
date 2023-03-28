import { useState } from 'react'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Offers from './components/Offers.jsx'
import Plan from './components/Plan.jsx'
import Rooms from './components/Rooms.jsx'
import ImageSlider from './components/ImageSlider.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer/>
    </div>
  )
}

export default App
