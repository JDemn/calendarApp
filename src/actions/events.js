import { types } from "../types/types";

export const addAddNew =( event )=> ( {
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