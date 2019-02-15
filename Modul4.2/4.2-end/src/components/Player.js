import Icon from './Icon';  

/** VAR 1 SITUATIA INITIALA **/

// import React from "react";
// import Counter from "./Counter";

// const Player = (props) => {

//   return (
//     <div className="player">
//       <span className="player-name">
//         <button className="remove-player" onClick={() => props.removePlayer(props.id)}>
//           ✖
//         </button>
//         {props.name}
//       </span>

//       <Counter 
//         score= {props.score}
//         changeScore = {props.changeScore} 
//         id = {props.id}
//         />
//     </div>
//   );
// };

// export default Player;


/** VAR 2 FOLOSIREA UNEI COMPONENTE PURE **/

import React from 'react';
import Counter from "./Counter";

class Player extends React.PureComponent {

  render() { 

    const {removePlayer, isHighScore, name, score, changeScore, id} = this.props;
    
    console.log(name + " rendered");
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {/* true or false */}
          <Icon isHighScore={isHighScore} /> 
         
          {name}
        </span>

        <Counter 
          score= {score}
          changeScore = {changeScore} 
          id = {id}
          />
      </div>

    );
  }
}
 
export default Player;
