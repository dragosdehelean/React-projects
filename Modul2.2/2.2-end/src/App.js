import React, { Component } from "react";
import Header from "./components/HeaderComponent";
import { DISHES } from './shared/dishes';
import Menu from "./components/MenuComponent";

class App extends Component {

  state = { dishes: DISHES };

  
  
  render() {   
    return (
      <div>
        {/* <Header /> */}

        <Header dishesnumber = {this.state.dishes.length} />

        <Menu dishes={this.state.dishes} />

      </div>
    );
  }
}

export default App;
