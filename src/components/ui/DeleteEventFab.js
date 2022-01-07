import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNoteEvent } from '../../actions/events';

export const DeleteEventFab = () => {
    const dispatch = useDispatch();

    const deleteHandleEvent=()=>{
        dispatch( deleteNoteEvent())
    }
    return (
        <button 
            className = 'btn btn-danger fab-danger'
            onClick = { deleteHandleEvent }
        >
            <i className = 'fas fa-trash'></i>
            <span> Borrar evento</span>
        </button>
    )
}
