import React, { Component } from "react";
import GuestList from "./Components/MainContent/GuestList/GuestList";
import Counter from "./Components/MainContent/Counter";
import Header from "./Components/Header/Header";
import ConfirmedFilter from "./Components/MainContent/ConfirmedFilter";

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      { name: "Alex", isConfirmed: true, isEditing: false, id: 1 },
      { name: "Bogdan", isConfirmed: false, isEditing: false, id: 2 },
      { name: "Ciprian", isConfirmed: false, isEditing: false, id: 3 }
    ]
  };

  /** HEADER METHODS */

  /**
   * Handles the filtering of confirmed guests
   */
  toggleFilter = () => {
    this.setState(prevState => ({ isFiltered: !prevState.isFiltered }));
  };

  /**
   * Handles the Add New Guest input field
   */
  handlingNameInput = ev => {
    this.setState({ pendingGuest: ev.target.value });
  };

  /**
   * Handles the adding of a new guest
   */
  addGuest = ev => {
    ev.preventDefault();
    this.setState(prevState => {
      const maxId = Math.max(...prevState.guests.map(g => g.id));
      return {
        guests: [
          {
            name: prevState.pendingGuest,
            isConfirmed: false,
            isEditing: false,
            id: maxId + 1
          },
          ...prevState.guests
        ],
        pendingGuest: ""
      };
    });
  };

  /** GUEST LIST METHODS */

  /**
   * Generic method to change any property from a specific guest
   */
  toggleGuestPropertyAt = (property, id) => {
    this.setState(prevState => {
      return {
        guests: prevState.guests.map(g =>
          g.id === id ? { ...g, [property]: !g[property] } : g
        )
      };
    });
  };

  /**
   * Handles the click on the "Confirmed" checkbox
   */
  onConfirmToggle = id => {
    this.toggleGuestPropertyAt("isConfirmed", id);
  };

  /**
   * Controls the edited text from the guest name's field
   */
  setNameAt = (text, id) => {
    this.setState(prevState => ({
      guests: prevState.guests.map(g => g.id === id ? { ...g, name: text } : g )
    }));
  };

  /**
   * Handles the "Edit/Save" action
   */
  onEditToggle = id => {
    this.toggleGuestPropertyAt("isEditing", id);
  };

  removeGuestAt = id => {
    this.setState(prevState => ({
      guests: prevState.guests.filter(g => g.id !== id)
    }));
  };

  /** COUNTER METHODS */

  getTotalInvited = () => this.state.guests.length;

  getTotalConfirmed = () =>
    this.state.guests.filter(guest => guest.isConfirmed).length;

  render() {
    const attending = this.getTotalConfirmed();
    const totalGuests = this.getTotalInvited();

    return (
      <div className="App">
        <Header
          addGuest={this.addGuest}
          pendingGuest={this.state.pendingGuest}
          handlingNameInput={this.handlingNameInput}
        />
        <div className="main">
          <ConfirmedFilter
            toggleFilter={this.toggleFilter}
            isFiltered={this.state.isFiltered}
          />
          <Counter
            attending={attending}
            unconfirmed={totalGuests - attending}
            total={totalGuests}
          />

          <GuestList
            guests={this.state.guests}
            onConfirm={this.onConfirmToggle}
            onEditToggle={this.onEditToggle}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuestName={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
