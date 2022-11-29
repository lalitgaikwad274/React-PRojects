import React from 'react'
import './card.css'

function Card(props) {
    let clas = 'card ' + props.className;
  return (
        <div className={clas}>
            {props.children}
        </div> 
  )
}

export default Card