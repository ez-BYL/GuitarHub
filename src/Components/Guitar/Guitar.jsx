import React from 'react'
import './Guitar.css'
import gallery from '../../assets/collection.jpeg'
import capo from '../../assets/capo.jpeg'
import pick from '../../assets/pick.jpeg'
import bags from '../../assets/bags.jpeg'
import strings from '../../assets/strings.jpeg'
import arrow from '../../assets/arrow.svg'

const Guitar = () => {
  return (
    <div className='guitar'>
      <div className="gallery">
        <img src={gallery} alt=''/>
        <img src={capo} alt=''/>
        <img src={bags} alt=''/>
        <img src={pick} alt=''/>
        <img src={strings} alt=''/>
      </div>
      <button className='btn'>See More<img src={arrow} alt=''/></button>
    </div>
  )
}

export default Guitar
