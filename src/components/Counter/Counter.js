import React from 'react';

import './Counter.scss';

const Counter = ({ time }) => {

    return (
        <div className="counter">
            <p>Your time:</p>
            <p className="counter__time">{time}</p>
        </div>
    )
}

export default Counter;