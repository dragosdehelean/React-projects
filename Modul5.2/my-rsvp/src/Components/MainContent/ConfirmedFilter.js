import React from "react";
import propTypes from 'prop-types';

const ConfirmedFilter = ({ isFiltered, toggleFilter }) => {
  return (
    <div>
      <h2>Invitees</h2>
      <label>
        <input type="checkbox" onChange={toggleFilter} checked={isFiltered} />
        Hide those who haven't responded
      </label>
    </div>
  );
};

ConfirmedFilter.propTypes={
    isFiltered: propTypes.bool.isRequired,
    toggleFilter: propTypes.func.isRequired,
}

export default ConfirmedFilter;
