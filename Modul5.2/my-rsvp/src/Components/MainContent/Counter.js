import React from 'react';
import propTypes from 'prop-types';

const Counter = ({ attending, unconfirmed, total }) => {

    return (
        <table className="counter">
            <tbody>
                <tr>
                    <td>Attending:</td>
                    <td>{attending}</td>
                </tr>
                <tr>
                    <td>Unconfirmed:</td>
                    <td>{unconfirmed}</td>
                </tr>
                <tr>
                    <td>Total:</td>
                    <td>{total}</td>
                </tr>
            </tbody>
        </table>
    )

}

Counter.propTypes = { 
    attending: propTypes.number.isRequired,
    unconfirmed: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
}

export default Counter;