import React from 'react'
import cards from './servedata'
import './serve.css'
const Card = ({ Image, Title, Content }) => {
  return (
    <article className='card'>
      <div className='card-wrap'>
        <img className="card-img" src={Image} alt='' />
        <h2 className="card-h2">{Title}</h2>
        <p className="card-p"> {Content}</p>
      </div>
    </article>
  )
}

function serve() {
  return (
    <div className='serverow'>
      {cards.map((servi) => {
        return <Card key={servi.id} {...servi}></Card>
      })}
    </div>
  )
}

export default serve
