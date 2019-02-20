import * as PlayerActionTypes from "../actiontypes/player";

const initialState = [
  {
    name: "Mihai",
    score: 31
  },
  {
    name: "Alina",
    score: 20
  },
  {
    name: "Carmen",
    score: 50
  }
];

export default function Player(state = initialState, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return [...state, { name: action.name, score: 0 }];
    case PlayerActionTypes.REMOVE_PLAYER:
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return state.map((player, index) => {
        return index === action.index ? { ...player, score: player.score + action.score } : player;
      });
    default:
      return state;
  }
}
