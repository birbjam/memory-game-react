import React, { Component } from 'react'
import ScoreHeader from './components/ScoreHeader'
import GameCard from './components/Card'
import Wrapper from './components/Wrapper'
import cards from './cards.json'
import './App.css'

class App extends Component {
  state = {
    cards,
    score: 0,
    topscore: 0,
    message: "",
    clickCardArray: []
  };

  shuffleCards = (cardArray) => {
    for (let i = cardArray.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      [cardArray[i], cardArray[r]] = [cardArray[r], cardArray[i]];
    }
    return cardArray;
  };

  clickpic = (id) => {
    
    this.setState({ cards: this.shuffleCards(cards) });

    if (this.state.clickCardArray.includes(id)) {
      this.setState({
        score: 0,
        clickCardArray: [],
        message: "Game Over! Click on another image to restart!"
      });
    } else {
      this.setState({
        clickCardArray: this.state.clickCardArray.concat([id]),
        score: this.state.score + 1
      });
    }
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score });
    }
  };

  render() {
    return (
      <Wrapper>
        <ScoreHeader>CLICK</ScoreHeader>
        {this.state.cards.map(card => (
            <GameCard
              clickpic={this.clickpic}
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </Wrapper>
    );
  }
}
 

export default App
