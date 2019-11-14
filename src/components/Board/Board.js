import React from 'react';
import Field from '../Field/Field';

import './Board.scss';

const Board = ({ fields, handleClick }) => {
    return (
        <div className="board">
            {
                fields.map((field) => <Field key={field.id} field={field} handleClick={handleClick} />)
            }
        </div>
    )
}

export default Board;