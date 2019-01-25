import React from "react";

const GuestList = props => {
  const elements = props.guests.map((item, index) => (
    <li className={ item.isConfirmed ? "responded" : "" } key={index.toString()}>
      <span>{item.name}</span>
      <label>
        <input type="checkbox" checked={item.isConfirmed}  /> Confirmed
      </label>
      <button>edit</button>
      <button>remove</button>
    </li>
  ));

  return (
    <ul>
      <li className="pending">
        <span>Safia</span>
      </li>

      { elements }

    </ul>
  );
};

export default GuestList;
