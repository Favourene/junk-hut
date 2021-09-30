import React from 'react'
import  './Menu.css'
import meals from './Menudata'
import Image2 from '../image/restaurant-img14.webp'

const Food = ({Name,Price,Content}) =>{
 return (
   <div className='menu-list'>
     <h1>
       <span>{Name}</span> ....... <span>{Price}</span>
     </h1>
     <p>{Content}</p>
   </div>
 )
}

function Menu() {
 return (
   <>
     <div className='menu-wrap'>
       <div className='menu-left'>
         <div className='menu-frame'></div>
         <div className='dinner'>
           <img src={Image2} alt='' />
           <h2>Dinner</h2>
           <p>EVERY DAY 19:00 - 22:00</p>
         </div>
       </div>
       <div className='menu-right'>
        {meals.map((food)=>{
         return <Food key={food.id} {...food}></Food>
        })}
       </div>
     </div>
   </>
 )
}

export default Menu
