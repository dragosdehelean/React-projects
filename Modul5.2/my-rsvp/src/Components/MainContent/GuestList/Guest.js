import React from "react";
import propTypes from 'prop-types';
import GuestName from './GuestName';

const Guest = ({ guest, onConfirm, onEditToggle, isEditing, setName, removeGuest }) => {

    return (
        <li className={guest.isConfirmed ? "responded" : ""} >
            <GuestName
                isEditing={isEditing}
                handleNameEdits={(e) => setName(e.target.value)}>
                {guest.name}
            </GuestName>
            <label>
                <input type="checkbox" checked={guest.isConfirmed} onChange={onConfirm} /> Confirmed
            </label>
            <button onClick={onEditToggle}>{guest.isEditing ? 'save' : 'edit'}</button>
            <button onClick={removeGuest}>remove</button>
        </li>
    )
};

Guest.propTypes = {
    guest: propTypes.object.isRequired,
    onConfirm: propTypes.func.isRequired,
    onEditToggle: propTypes.func.isRequired,
    isEditing: propTypes.bool.isRequired,
    setName: propTypes.func.isRequired,
    removeGuest: propTypes.func.isRequired,
}

export default Guest;
