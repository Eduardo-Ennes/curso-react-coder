import React from 'react'
import './Card.css'

function getColors(params) {
  if(params.red) return "red"
  if(params.green) return "green"
  if(params.blue) return "blue"
  if(params.purple) return "purple"
  return ""
}

const Card = (props) => {
  return (
    <div className={`card ${getColors(props)}`}>
      <div className='header'>
        <span className='title'>{props.title}</span>
      </div>
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}

export default Card