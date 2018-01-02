import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({selectedOption, onCloseModal}) => (
    <Modal
        isOpen={!!selectedOption}
        onRequestClose={onCloseModal}
        ariaHideApp={false}
    >
        <h3>Selected Option</h3>
        {selectedOption && <p>{selectedOption}</p>}
        <button onClick={onCloseModal}>Okay</button>
    </Modal>
);

export default OptionModal;