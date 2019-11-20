import React from 'react';

import './Winner.scss';

const Winner = ({ winner }) => {
    return (
        <tr className="winner">
            <td>{winner.playerName}</td>
            <td>{winner.time}</td>
        </tr>
    )
}

export default Winner;