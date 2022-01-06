import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';

import { cleanEventActiveNote, eventAddNew } from '../../actions/events';
import { uiCloseModal } from '../../actions/ui';

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

const initEvent = {
    title   : '',
    notes   : '',
    start   : startDate.toDate(),
    end     : endDate.toDate(),
}

export const CalendarModal = () => {

    //use selector sirve para estar pendiente del store
    const { modalOpen } = useSelector( state => state.ui); //ui viene del rootReducer.js
    const { activeEvents } = useSelector( state => state.calendar);
    const dispatch = useDispatch();     
    const [dateStart, setdateStart] = useState(startDate.toDate());
    const [dateEnd, setdateEnd] = useState( endDate.toDate() );
    const [formValues, setformValues] = useState( initEvent );
    const [titleValid, settitleValid] = useState(true);
    // const [isOpen, setisOpen] = useState(true) //abrir y cerrar modal

    const { title, notes, start, end }  = formValues;

    useEffect(() => {
        if(activeEvents){
            setformValues(activeEvents);
        }
    }, [activeEvents, setformValues])
    const handleInputChange = ({ target })=> {
        setformValues({
            ...formValues,
            [ target.name] : target.value
        })
    }
    const closeModal = () => {
        console.log('cerrando ...')
        dispatch( uiCloseModal() );
        dispatch(cleanEventActiveNote());
        setformValues ( initEvent );
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
        // console.log(formValues)
        const momentStart = moment( start);
        const momentEnd = moment(end);

        //validar que las fechas no sean iguales
        if(momentStart.isSameOrAfter(momentEnd) ){
            Swal.fire('Error','La fecha fin debe de ser mayor a la fecha de inicio', 'error');
            return;
        }
        if(title.trim().length<2){
            return settitleValid(false)
        }
        
        // TODO Realizar grabación en base de datos
        dispatch( eventAddNew({
            ...formValues,
            id : new Date().getTime(),
            user : {
                _id : '123',
                name : 'Deniz'
            }
        }) ); //agregar nuevo evento

        settitleValid(true);
        closeModal();
    }
    return (
        <Modal
            isOpen= { modalOpen }
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
                        // className = {`form-control ${ titleValid ? 'is-valid': 'is-invalid'}`}
                        className = { `form-control ${ !titleValid && 'is-invalid'}`}
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
