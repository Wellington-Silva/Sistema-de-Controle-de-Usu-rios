import Modal from 'react';
import { useState } from 'react';

Modal.setAppElement('#root')

function App() {

    const [modalIsUp, setIsUp] = useState(false);

    function handleOpenModal() {
        setIsUp(true);
    }

    function handleCloseModal() {
        setIsUp(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto'
        }
    } 

    return (
        <div className="container">
            <button id="modal-button" onClick={handleOpenModal}>Modal</button>
            <Modal isOpen={modalIsUp } onRequestClosed={handleCloseModal}>
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