import React from 'react';

import './Winning.scss';

const Winning = ({ winning }) => {
    return (
        <div className="winning">
            {`Player: ${winning.playerName}, time: ${winning.time}`}
        </div>
    )
}

export default Winning;