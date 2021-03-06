import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // 1. Initialize a 'rating' state
  state = {
    rating: 0
  };

  // 2. Write a function that returns 5 Star components
  renderStars = () => {
    let stars = [];
    let maxRating = 5;

    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <Star
          isSelected={this.state.rating > i}
          setRating={ () => this.handleSetRating(i + 1) }
          key={i}
        />
      );
    }
    return stars;
  }

  // 3. Write an event handler that updates the rating state
  //    Pass the function to a Star component via props
  handleSetRating = (rating) => {
    if (this.state.rating === rating) {
      this.setState({ rating: 0 });
    } else {
      this.setState({ rating });
    }
  }

  render() {
    return (
      <ul className="course--stars">
        {/* 4. Render the Star components */}
        { this.renderStars() }
      </ul>
    );
  }
}

export default StarRating;