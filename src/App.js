import React from 'react'
import Nav from './component/Nav'
import './App.css'
import Serve from './component/Serve'
import Image5 from './image/restaurant-img17.webp'
import Popular from './component/popular'

function App() {
  return (
    <div>
      <Nav />
      <section className='hero'>
        <div className='hero-wrapper'>
          <h1>GREAT FOOD</h1>
          <p>FOR GOOD TIME</p>
          <button>STARTING - $55</button>
        </div>
      </section>
      <Serve />
      <section className='love'>
        <div className='love-left'>
          <div className='love-left-wrap'>
            <img src={Image5} alt='' />
            <h1>WE LOVE RESTAURANTS AS MUCH AS YOU DO.</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </p>
            <button>MORE ABOUT RESTAURANTS</button>
          </div>
        </div>
        <div className='love-right'>
          <div className='love-frame'></div>
        </div>
      </section>
      <section className='pop-sec'>
        <div className='pop-head'>
          <div className='popwrap'>
            <h1>POPULAR DISHES</h1>
            <div className='pop-line'></div>
          </div>
        </div>
        <Popular />
      </section>
      <section className='love'>
        <div className='love-right ed'>
          <div className='love-frame'></div>
        </div>
        <div className='love-left'>
          <div className='love-left-wrap'>
            <img src={Image5} alt='' />
            <h1>ENJOYED THE MEAL AND FRIENDLY SERVICE!</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </p>
            <button>MORE ABOUT RESTAURANTS</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
