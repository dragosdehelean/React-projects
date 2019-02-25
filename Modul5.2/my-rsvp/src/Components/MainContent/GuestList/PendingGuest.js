import React from "react";
import propTypes from 'prop-types';

const PendingGuest = ({ pendingGuestName}) => {

    return (

        <li className="pending">
            <span>{pendingGuestName}</span>
        </li>

    )
};

PendingGuest.propTypes = {
    pendingGuestName: propTypes.string.isRequired,
}

export default PendingGuest;
