import React from 'react'
import './style.css'

const ScoreHeader = (props) => (
  <div className='header'>
    <div className='title'>{props.children}</div>
    <div className='score'>
      Score: {props.score} | Top Score: {props.topscore}
    </div>
  </div>
)

export default ScoreHeader
