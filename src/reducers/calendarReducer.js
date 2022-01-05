import moment from 'moment';
import { types } from '../types/types';

const initialState ={
    events : [
        {
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
        default:
            return state;
    }
}