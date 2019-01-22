import React from "react";

const GuestList = props => {
  const elements = props.guests.map((guest) => (
    <li className="responded">
      <span>Iver</span>
      <label>
        <input type="checkbox" checked /> Confirmed
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
      {/* <li className="responded">
        <span>Iver</span>
        <label>
          <input type="checkbox" checked /> Confirmed
        </label>
        <button>edit</button>
        <button>remove</button>
      </li>

      <li>
        <span>Joel</span>
        <label>
          <input type="checkbox" /> Confirmed
        </label>
        <button>edit</button>
        <button>remove</button>
      </li> */}

      { elements }

    </ul>
  );
};

export default GuestList;
