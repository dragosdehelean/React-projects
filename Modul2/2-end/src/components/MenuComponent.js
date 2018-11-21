
import React, { Component } from "react";
import { Media } from "reactstrap";

class Menu extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <Media list>
            { 
              this.props.dishes.map(dish => {
                return (
                  <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                      <Media left middle>
                        <Media object src={dish.image} alt={dish.name} />
                      </Media>
                      <Media body className="ml-5">
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                      </Media>
                    </Media>
                  </div>
                );
              })
            }
          </Media>
        </div>
      </div>
    );
  }
}

export default Menu;

