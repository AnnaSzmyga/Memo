import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import './GameOver.scss';

const GameOver = ({ gameOver, closeModal, time }) => {
    return (
        <Modal className="game-over" isOpen={gameOver} fade={true}>
            <ModalHeader>Congratulations!</ModalHeader>
            <ModalBody>{`Your time: ${time}`}</ModalBody>
            <ModalFooter>
                <button onClick={closeModal}>ok</button>
            </ModalFooter>
        </Modal>
    )
}

export default GameOver;