import React, { Component } from "react";

class NameForm extends Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    
    event.preventDefault();
    this.props.addPlayer(this.state.value)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;

