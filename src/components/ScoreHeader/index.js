import React from 'react'
import './style.css'

const ScoreHeader = (props) => (
  <header>
    <div className='title'>{props.children}</div>
    <div className='score'>
      Score: {props.score} | Top Score: {props.topscore}
    </div>
    <div className='message'>{props.message}</div>
  </header>
)

export default ScoreHeader
