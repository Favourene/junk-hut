import React from 'react'
import './App.css'
import Nav from './component/Nav'
import Serve from './component/Serve'
import Popular from './component/popular'
import Menu from './component/Menu'
import Image5 from './image/restaurant-img17.png'
import Image6 from './image/restaurant-img31.png'
import Image7 from './image/people (1).png'
import Image8 from './image/star.svg'
import Image9 from './image/people (2).png'
import Image10 from './image/people (3).png'
import Image11 from './image/smartphone.svg'
import Image12 from './image/placeholder.svg'
import Image13 from './image/envelope.svg'

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
      <section id='about' className='love'>
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
      <section id='dish' className='pop-sec'>
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
      <section id='menu' className='menu'>
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
      <section id="chef" className='chef'>
        <div className='chef-head'>
          <div className='chefwrap'>
            <h1>THE CHEF</h1>
            <div className='chef-line'></div>
          </div>
        </div>
        <div className='chef-wrap'>
          <div className='chef-left'>
            <div className='chef-frame'></div>
          </div>
          <div className='chef-right'>
            <div className='chef-right-wrap'>
              <img src={Image6} alt='' />
              <h1>PATRICK SMITH</h1>
              <p className='chef-job'>CHEF, CO-FOUNDER</p>
              <p className='chef-desc'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s.
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>
        <div className='chef-wrap ed'>
          <div className='chef-right'>
            <div className='chef-right-wrap'>
              <img src={Image6} alt='' />
              <h1>SANCHO PANSA</h1>
              <p className='chef-job'>BARTENDER</p>
              <p className='chef-desc'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s.
              </p>
              <button>READ MORE</button>
            </div>
          </div>
          <div className='chef-left new'>
            <div className='chef-frame'></div>
          </div>
        </div>
      </section>
      <section id="testimony" className='testimony'>
        <div className='testimony-card'>
          <div className='img'>
            <img src={Image7} alt='' />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
          <div className='star'>
            <img src={Image8} alt='' />
            <img src={Image8} alt='' />
            <img src={Image8} alt='' />
            <img src={Image8} alt='' />
            <img src={Image8} alt='' />
          </div>
          <h2>ALEXANDER HARVARD</h2>
        </div>
        <div className='testimony-card'>
          <div className='img'>
            <img src={Image10} alt='' />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
          <div className='star'>
            <img src={Image8} alt='' />
            <img src={Image8} alt='' />
            <img src={Image8} alt='' />
            <img src={Image8} alt='' />
            <img src={Image8} alt='' />
          </div>
          <h2>HERMAN MILLER</h2>
        </div>
        <div className='testimony-card'>
          <div className='img'>
            <img src={Image9} alt='' />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
          <div className='star'>
            <img src={Image8} alt='' />
            <img src={Image8} alt='' />
            <img src={Image8} alt='' />
            <img src={Image8} alt='' />
            <img src={Image8} alt='' />
          </div>
          <h2>BRYAN JONHSON</h2>
        </div>
      </section>
      <section className='counter'>
        <div className='counter-card'>
          <h1>312</h1>
          <p>CLIENTS SERVED</p>
        </div>
        <div className='counter-card'>
          <h1>980</h1>
          <p>HOURS COOKING</p>
        </div>
        <div className='counter-card'>
          <h1>810</h1>
          <p>TABLE BOOKING</p>
        </div>
        <div className='counter-card'>
          <h1>600</h1>
          <p>FOOD RECIPES</p>
        </div>
      </section>
      <section id='contact' className='contact'>
        <div className='contact-card'>
          <img src={Image11} alt='' />
          <p>123-456-7890</p>
        </div>
        <div className='contact-card'>
          <img src={Image12} alt='' />
          <p>VICTORIA, UNITED STATES</p>
        </div>
        <div className='contact-card'>
          <img src={Image13} alt='' />
          <p>NO-REPLY@DOMAIN.COM</p>
        </div>
      </section>
      <footer>
        Template Design from <a href='http://www.themezaa.com/'>THEMEZAA</a>
      </footer>
    </>
  )
}

export default App
