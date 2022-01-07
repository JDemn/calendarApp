import moment from 'moment';
import { types } from '../types/types';

const initialState ={
    events : [
        {
            id : new Date().getTime(),
            title   : 'Birthday of the boss',
            start   : moment().toDate(), //manejo de fechas con moment
            end     : moment().add(2,'hours').toDate(), //este evento se acaba en dos horas 
            bgcolor : '#fafafa',
            notes   : 'buy the cupe cake',
            user    : {
                _id     : '123',
                name    : 'José'
            }
        }
    ],
    activeEvents : null
};

export const calendarReducer=( state = initialState, action)=>{

    switch ( action.type ) {
        case types.eventsetActive :
            return {
                ...state,
                activeEvents : action.payload
            }
        case types.eventAddNew :
            return {
                ...state,
                events : [
                    ...state.events,
                    action.payload
                ]
            }
        case types.cleanEventActiveNote :
            return {
                ...state,
                activeEvents : null
            }
        case types.eventUpdated:
            return {
                ...state,
                events : state.events.map( e => (e.id === action.payload.id)? action.payload : e)
            }
        case types.deleteNoteEvent :
            return {
                ...state,
                events : state.events.filter( e=> (e.id !== state.activeEvents.id)), // se use el state en la condición porque aquí no tengo un payload en el action, entonces el id del evento que queremos borrar lo encuentra en el mismo estado
                activeEvents : null, //se quita la nota activa para que no haya ningún incomeniente
            }
        default:
            return state;
    }
}