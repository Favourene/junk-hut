import React from 'react';
import Nav from './component/Nav';
import './App.css'

function App() {
 return (
   <div>
     <Nav />
     <section className="hero">
       <div className="hero-wrapper">
         <h1>GREAT FOOD</h1>
         <p>FOR GOOD TIME</p>
         <button>STARTING - $55</button>
       </div>
     </section>
   </div>
 )
}

export default App
