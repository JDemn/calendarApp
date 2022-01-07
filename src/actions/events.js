import { types } from "../types/types";

export const eventAddNew =( event )=> ( {
    type : types.eventAddNew,
    payload : event,
})

export const eventSetActive =( event )=>(
    //el argumento es el evento seleccionado por el usuario en el calendario. esta en el file CalendarScreen, onSelectEvent()
    {
        type : types.eventsetActive,
        payload : event,
    }
)

export const cleanEventActiveNote=()=>({ type : types.cleanEventActiveNote});

export const eventUpdated =( event )=>(
    { 
        type : types.eventUpdated,
        payload : event,
    }
);

export const deleteNoteEvent =()=>(
    {
        type : types.deleteNoteEvent,
    }
);