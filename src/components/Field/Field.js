import React from 'react';

import './Field.scss';

const Field = ({ field, handleClick }) => {
    const { id, image, active, solved} = field;
    const fieldClassName = active ? " active" : solved ? " solved" : "";
    return (
        <div className={`field${fieldClassName}`} onClick={() => handleClick(id)}>
            <div className="field__image" style={{backgroundImage: `url(./images/${image})`}}></div>
            <div className="field__cover">
                <img className="field__logo" src={"./images/logo.png"} />
            </div>
        </div>
    )
}

export default Field;

//style={{backgroundImage: `url(./images/${image})`}}