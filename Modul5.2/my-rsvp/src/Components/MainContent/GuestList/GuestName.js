import React from 'react';
import propTypes from 'prop-types';

const GuestName = (props) => {
    if (props.isEditing) {
        return (
            <input
                type="text"
                name="name"
                value={props.children}
                onChange={props.handleNameEdits} />
        )
    }
    return (
        <span>
            {props.children}
        </span>
    );
}

GuestName.propTypes = {
    isEditing: propTypes.bool.isRequired,
    handleNameEdits: propTypes.func.isRequired
}


export default GuestName;