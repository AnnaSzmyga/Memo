import React from 'react';
import Winning from '../Winning/Winning';

import './WinningsList.scss';

const WinningsList = ({ winnings }) => {
    console.log(winnings);
    return (
        <div className="winnings-list">
            {
                winnings.map((winning, i) => <Winning key={i} winning={winning} />)
            }
        </div>
    )
}

export default WinningsList;