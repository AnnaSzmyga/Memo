import React from 'react';

import './Field.scss';

const Field = ({ field, handleClick }) => {
    const { id, image, active} = field;
    const fieldClassName = active ? " active" : "";
    return (
        <div className={`field${fieldClassName}`} style={{backgroundImage: `url(./images/${image})`}} onClick={() => handleClick(id)}></div>
    )
}

export default Field;