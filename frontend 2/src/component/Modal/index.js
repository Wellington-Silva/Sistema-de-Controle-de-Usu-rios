import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function App() {
    const [modalIsOpen, setIsOpen] = useState(false);
    function handleOpenModal() { setIsOpen(true); }
    function handleCloseModal() { setIsOpen(false); }

    const customStyles = {
        content: {
            top: '30vh',
            left: '30%',
            right: 'auto'
        }
    }

    return (
        <div className="container">
            <button id="modal-button" onClick={handleOpenModal}>Modal</button>
            <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} style={customStyles}>
                <form className='modal-container'>
                    <input type="text" id='name' placeholder='Nome'></input>
                    <input type="text" id='phone' placeholder='Telefone'></input>
                    <button onClick={handleCloseModal}>Fechar</button>
                </form>
            </Modal>
        </div>
    );
}


export default App;