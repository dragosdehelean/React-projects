import React from "react";
import propTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = ({ guests, onConfirm, onEditToggle, setNameAt, isFiltered, removeGuestAt, pendingGuestName }) => {

  return (
    <ul>
      {pendingGuestName ?
        <PendingGuest pendingGuestName={pendingGuestName} />
        : null }
      {guests
        .filter(guest => isFiltered ? guest.isConfirmed : true)
        .map((guest, index) => (
          <Guest key={guest.id.toString()}
            guest={guest}
            isEditing={guest.isEditing}
            onConfirm={() => onConfirm(guest.id)}
            onEditToggle={() => onEditToggle(guest.id)}
            setName={(text) => setNameAt(text, guest.id)}
            removeGuest={() => removeGuestAt(guest.id)}
          />
        ))}
    </ul>
  );
};

GuestList.propTypes = {
  guests: propTypes.array.isRequired,
  onConfirm: propTypes.func.isRequired,
  onEditToggle: propTypes.func.isRequired,
  setNameAt: propTypes.func.isRequired,
  isFiltered: propTypes.bool.isRequired,
  removeGuestAt: propTypes.func.isRequired,
  pendingGuestName: propTypes.string.isRequired,
}

export default GuestList;
