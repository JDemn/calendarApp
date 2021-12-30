import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';


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

const startDate = moment().minutes(0).seconds(0).add(1,'hour');
const endDate = moment().minute(0).seconds(0).add(2,'hour');
// const endDate = startDate.clone().add(1,'hour');

export const CalendarModal = () => {
    const [dateStart, setdateStart] = useState(startDate.toDate());
    const [dateEnd, setdateEnd] = useState( endDate.toDate() );
    const [formValues, setformValues] = useState({
        title   : 'Evento',
        notes   : '',
        start   : startDate.toDate(),
        end     : endDate.toDate(),
    })
    const [isOpen, setisOpen] = useState(true)

    const { title, notes }  = formValues;

    const handleInputChange = ({ target })=> {
        setformValues({
            ...formValues,
            [ target.name] : target.value
        })
    }
    const closeModal = () => {
        setisOpen(false)
        console.log('cerrando ...')
    }
    const handleStartDateChange =( e )=>{
        setdateStart( e );
        //estableces fecha de inicio
        setformValues({
            ...formValues,
            start : e
        })
    }
    const handleDateEndChange =( e )=> {
        console.log(e);
        setdateEnd( e );
        //establecer fecha de termino 
        setformValues({
            ...formValues,
            end : e
        })
    }
    const handleSubmitForm =( e )=>{
        e.preventDefault();
        console.log(formValues)
    }
    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        // contentLabel="Example Modal"
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit = { handleSubmitForm }>

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={ dateStart }
                        className = " form-control" 
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={ handleDateEndChange }
                        value={ dateEnd }
                        className = "form'control"
                        minDate= { dateStart }
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        value= { title }
                        autoComplete="off"
                        onChange= { handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        value= { notes }
                        onChange= { handleInputChange }
                        name="notes"
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
