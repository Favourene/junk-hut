import React from 'react'
import './popular.css'
import Image6 from '../image/restaurant-img19.png'
import Image1 from '../image/restaurant-img13.png'
import Image7 from '../image/restaurant-img20.png'
import Image8 from '../image/restaurant-img22.png'
import Image9 from '../image/restaurant-img24.png'
import Image10 from '../image/restaurant-img23.png'
import Image11 from '../image/restaurant-img26.png'

function popular() {
  return (
    <div className='popular-wrap'>
      <div className='popular-one pop'>
        <div className='popular-img'>
          <img src={Image6} alt='' />
        </div>
        <div className='popular-card'>
          <div className='popular-card-wrap'>
            <div className='popular-frame'>
              <img src={Image1} alt='' />
              <h2>SALMON STEAK</h2>
              <p>JUST – $19.50</p>
            </div>
          </div>
        </div>
      </div>
      <div className='popular-two pop'>
        <img src={Image7} alt='' />
      </div>
      <div className='popular-one pop'>
        <div className='popular-card '>
          <div className='popular-card-wrap'>
            <div className='popular-frame'>
              <img src={Image9} alt='' />
              <h2>CHICKEN BREAST</h2>
              <p>JUST – $12.50</p>
            </div>
          </div>
        </div>
        <div className='popular-img sef'>
          <img src={Image8} alt='' />
        </div>
      </div>
      <div className='popular-one pop rer'>
        <div className='popular-img'>
          <img src={Image10} alt='' />
        </div>
        <div className='popular-card'>
          <div className='popular-card-wrap'>
            <div className='popular-frame'>
              <img src={Image11} alt='' />
              <h2>BOWL OF CHILLI</h2>
              <p>JUST – $13.50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default popular
