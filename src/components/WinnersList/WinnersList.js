import React from 'react';
import Winner from '../Winner/Winner';
import { Modal } from 'reactstrap';

import './WinnersList.scss';

const WinnersList = ({ winners, showWinners, closeWinnersModal }) => {
    return (
        <Modal isOpen={showWinners} fade={true}>
            <div className="winners">
                <h2 className="winners__heading">Memo winners</h2>
                <table className="winners__table">
                    <thead>
                        <tr>
                            <th>Player:</th>
                            <th>Time:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            winners.map((winner, i) => <Winner key={i} winner={winner} />)
                        }
                    </tbody>
                </table>
                <button className="winners__close-btn" onClick={closeWinnersModal}>x</button>
            </div>
        </Modal>
    )
}

export default WinnersList;