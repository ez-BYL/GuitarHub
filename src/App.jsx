import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Brand from './Components/Brand/Brand'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Guitar from './Components/Guitar/Guitar'
import Testemonials from './Components/Testemonials/Testemonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our Collection' title='What We Offer'/>
        <Brand/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Guitar Accessories'/>
        <Guitar/>
        <Title subTitle='TESTIMONIALS' title='What Our Customers Say'/>
        <Testemonials/>
        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
