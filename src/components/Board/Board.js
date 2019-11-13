import React from 'react';
import Field from '../Field/Field';

import './Board.scss';

const Board = ({ images }) => {
    return (
        <div className="board">
            {
                images.map((image, i) => <Field key={i} image={image} />)
            }
        </div>
    )
}

export default Board;