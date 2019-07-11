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
        message: "GAME OVER! Click on another image to restart!"
      });
    } else {
      this.setState({
        clickCardArray: this.state.clickCardArray.concat([id]),
        score: this.state.score + 1,
        message: ""
      });
    }
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score });
    }

    if (this.state.score === 11) {
      this.setState({ message: "YOU WON! You clicked on each image only once!"})
    }
  };

  render() {
    return (
      <div className="App">
        <ScoreHeader 
          className="title" 
          score={this.state.score} 
          topscore={this.state.topscore} 
          message={this.state.message}>clicky memory game</ScoreHeader>
        <Wrapper>
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
        </div>
    );
  }
}
 

export default App
