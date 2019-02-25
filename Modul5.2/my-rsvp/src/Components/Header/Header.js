import React from 'react';
import propTypes from 'prop-types';

const Header = ({ addGuest, pendingGuest, handlingNameInput }) => {

    return (
        <header>
            <h1>RSVP App</h1>
            <form onSubmit={addGuest}>
                <input
                    type="text"
                    placeholder="Invite Someone"
                    value={pendingGuest}
                    onChange={handlingNameInput}
                />
                <button
                    type="submit"
                    name="submit"
                    value="submit">Submit
            </button>
            </form>
        </header >)
}

Header.propTypes = {
    addGuest: propTypes.func.isRequired,
    pendingGuest: propTypes.string.isRequired,
    handlingNameInput: propTypes.func.isRequired,
}

export default Header;
