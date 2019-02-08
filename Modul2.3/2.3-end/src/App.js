import React, { Component } from "react";
import Header from "./components/Header";
import { PLAYERS } from "./shared/players";
import Player from "./components/Player";

class App extends Component {
  state = { players: PLAYERS };


  handleChangeScore = (id, modifier) => {
    // console.log("scorul este: " + score);
    this.setState(prevState => (
      {
        players: prevState.players.map( (player) => {
          // dc e alt player decat cel cautat, returnez player-ul original
          if (player.id !== id){  
            return player
          } 
          // dc e player-ul cautat, returnez player-ul cu proprietatea score modificata
          else { 
            return Object.assign(player, {score: player.score + modifier}) 
          }
        })
      }
    ))
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  handleAddPlayer = name => {
    const newPlayer = { name: name, id: 5 };
    this.setState(prevState => ({
      players: [...prevState.players, newPlayer]
    }));
  };


  render() {
    return (
      <div className="scoreboard">

        <Header 
          title="Scoreboard" 
          totalPlayers= {this.state.players.length}
          totalScore = {this.state.players.reduce( (acc, player) => acc += player.score, 0 )} 
          />

        {/* Players list */}

        {this.state.players.map(player => (
          
          <Player
            name = {player.name}
            id = {player.id}
            key = {player.id.toString()}
            removePlayer = {this.handleRemovePlayer}
            changeScore = {this.handleChangeScore}
            score = {player.score}
          />
        ))}
      </div>
    );
  }
}

export default App;

