import React from 'react';
import {Modal, ModalHeader, ModalBody } from 'reactstrap';

import './GameOver.scss';

const GameOver = ({ gameOver, time, playerName, handleSubmit, handleChange}) => {
    return (
        <Modal className="game-over" isOpen={gameOver} fade={true}>
            <ModalHeader>Congratulations!</ModalHeader>
            <ModalBody>
                <p>{`Your time: ${time}`}</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={playerName}
                        onChange={handleChange}
                    />
                    <button type="submit">ok</button>
                </form>
            </ModalBody>
        </Modal>
    )
}

export default GameOver;