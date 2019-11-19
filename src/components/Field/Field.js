import React from 'react';

import './Field.scss';

const Field = ({ field, handleClick }) => {
    const { id, image, active, solved} = field;
    const fieldClassName = active ? " active" : solved ? " solved" : "";
    return (
        <div className={`field${fieldClassName}`} style={{backgroundImage: `url(./images/${image})`}} onClick={() => handleClick(id)}></div>
    )
}

export default Field;