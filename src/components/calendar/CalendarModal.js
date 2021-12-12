import React, { useState } from 'react';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');


export const CalendarModal = () => {
    const [isOpen, setisOpen] = useState(true)

    const closeModal =()=>{
        setisOpen( false )
        console.log('cerrando ...')
    }
    return (
        <Modal
            isOpen = { isOpen }
            // onAfterOpen={afterOpenModal}
            onRequestClose = { closeModal }
            style = { customStyles }
            closeTimeoutMS = { 200 }
            className = "modal"
            overlayClassName = "modal-fondo" 
            // contentLabel="Example Modal"
        >    
            <h2>Hola mundo</h2>
            <hr />
            <span> Hola de nuevo...</span>
        </Modal>
    )
}
