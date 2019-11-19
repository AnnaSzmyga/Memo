import React from 'react';

import './Counter.scss';

const Counter = ({ time }) => {
    return (
        <div className="counter">{`${time}s`}</div>
    )
}

export default Counter;