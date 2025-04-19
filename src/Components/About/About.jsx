import React from 'react'
import './About.css'
import about from '../../assets/guitar.jpg'
import play from '../../assets/play.svg'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
         <div className='about-left'>
          <img src={about} alt='' className='about-img'/>
          <img src={play} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
         </div>
         <div className='about-right'>
          <h3>About Us</h3>
          <h2>Are you looking for the best guitar collection?</h2>
          <p>🎸 Discover Your Sound at GuitarHub! Whether you're a seasoned professional or just starting your musical journey, we have everything you need to express your creativity and passion for music. </p>
          <p>Our extensive selection of guitars—from classic acoustics to cutting-edge electrics—ensures that you'll find the perfect instrument that resonates with your unique style. Explore our handpicked collection of accessories, expert gear, and innovative technology, all designed to elevate your playing experience. Plus, our friendly, knowledgeable staff is always ready to help you find exactly what you're looking for. Join our vibrant community of musicians and experience the magic of music at GuitarHub! Visit us today or shop online to discover exclusive deals and offers!</p>
         </div>
      
    </div>
  )
}

export default About
