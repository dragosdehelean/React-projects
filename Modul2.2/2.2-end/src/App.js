import React, { Component } from "react";
import Header from "./components/Header";
import { PLAYERS } from "./shared/players";
import Player from "./components/Player";

class App extends Component {
  state = { players: PLAYERS };

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

  removeHandler = id => {
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }));
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />

        {/* Players list */}
        {this.state.players.map(player => (
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;

