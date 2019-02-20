import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import { bindActionCreators } from 'redux';


class App extends Component {

  render() {

    const { dispatch, players } = this.props;

    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => (
      <Player 
        key={player.name}
        index={index} 
        name={player.name}
        score={player.score}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
    ))

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          {playerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
}

const mapStateToProps = state => (
  { players: state }
)

export default connect(mapStateToProps)(App);