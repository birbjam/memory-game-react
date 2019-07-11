import React from 'react'
import ghlogo from '../Footer/ghlogo.png'
import './style.css'

const Footer = props => (
  <footer>
    <div className='container'>
      <a href='https://github.com/birbjam/memory-game-react' target='_blank' rel='noopener noreferrer'>
        <img src={ghlogo} className='logo' alt='github logo' /></a>
    </div>
  </footer>
)

export default Footer
