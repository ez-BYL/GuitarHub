import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>
          Feel the rhythm.
        </h1>
        <p>Welcome to the GuitarHub, your one-stop destination for everything related to guitars! Whether you’re a beginner looking to pick up your first instrument or a seasoned musician searching for that perfect addition to your collection, we have something for everyone.</p>
        <button className='btn'>View More <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
