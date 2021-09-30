import React from 'react'
import Nav from './component/Nav'
import './App.css'
import Serve from './component/Serve'
import Image5 from './image/restaurant-img17.webp'
import Popular from './component/popular'
import Menu from './component/Menu'

function App() {
  return (
    <>
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
      <section className='love ed'>
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
      <section className='menu'>
        <div className='menu-head'>
          <div className='menuwrap'>
            <h1>THE MENU</h1>
            <div className='menu-line'></div>
          </div>
        </div>
        <Menu />
      </section>
      <section className='course'>
        <div className='meal breakfast'>
          <div className='frame'>
            <h2>BREAKFAST</h2>
            <p>Every Day</p>
            <p>08:00 - 10:00</p>
          </div>
        </div>
        <div className='meal lunch'>
          <div className='frame'>
            <h2>LUNCH</h2>
            <p>Every Day</p>
            <p>13:00 - 15:00</p>
          </div>
        </div>
        <div className='meal dina'>
          <div className='frame'>
            <h2>DINNER</h2>
            <p>Every Day</p>
            <p>19:00 - 22:00</p>
          </div>
        </div>
        <div className='meal drinks'>
          <div className='frame'>
            <h2>DRINKS</h2>
            <p>Every Day</p>
            <p>19:00 - 22:00</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
