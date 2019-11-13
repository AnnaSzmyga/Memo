import React from 'react';

import './Field.scss';

const Field = ({ image }) => {
    return (
        <div className="field" style={{backgroundImage: `url(./images/${image})`}}></div>
    )
}

export default Field;