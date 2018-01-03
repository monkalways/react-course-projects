import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({selectedOption, onCloseModal}) => (
    <Modal
        isOpen={!!selectedOption}
        onRequestClose={onCloseModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {selectedOption && <p className="modal__body">{selectedOption}</p>}
        <button className="button" onClick={onCloseModal}>Okay</button>
    </Modal>
);

export default OptionModal;