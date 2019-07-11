import React from 'react'
import ScoreHeader from './components/ScoreHeader'
import Card from './components/Card'
import Wrapper from './components/Wrapper'
import cards from './cards.json'
import './App.css'

function App () {
  return (
    <Wrapper>
      <ScoreHeader />
      <h1 className='Title'>CLICK</h1>
      <Card name={cards[0].name} image={cards[0].image} />
      <Card name={cards[1].name} image={cards[1].image} />
      <Card name={cards[2].name} image={cards[2].image} />
      <Card name={cards[3].name} image={cards[3].image} />
      <Card name={cards[4].name} image={cards[4].image} />
      <Card name={cards[5].name} image={cards[5].image} />
      <Card name={cards[6].name} image={cards[6].image} />
      <Card name={cards[7].name} image={cards[7].image} />
      <Card name={cards[8].name} image={cards[8].image} />
      <Card name={cards[9].name} image={cards[9].image} />
      <Card name={cards[10].name} image={cards[10].image} />
      <Card name={cards[11].name} image={cards[11].image} />
    </Wrapper>
  )
}

export default App
