import React from 'react';
import {Modal } from 'reactstrap';

import './GameOver.scss';

const GameOver = ({ gameOver, time, playerName, handleSubmit, handleChange}) => {
    return (
        <Modal isOpen={gameOver} fade={true}>
            <div className="game-over" >
                <h2 className="game-over__heading">Congratulations! You solved the memo!</h2>
                <h4 className="game-over__time">{`Your time: ${time}`}</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        className="game-over__input"
                        type="text"
                        placeholder="Your name"
                        value={playerName}
                        onChange={handleChange}
                    />
                    <button className="game-over__submit-btn" type="submit">ok</button>
                </form>
            </div>
        </Modal>
    )
}

export default GameOver;