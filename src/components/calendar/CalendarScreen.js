import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Navbar } from '../ui/Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment) // or globalizeLocalizer

//manejo de fechas con libreria moment no js
const events = [{
    title   : 'Birthday of the boss',
    start   : moment().toDate(), //manejo de fechas con moment
    end     : moment().add(2,'hours').toDate(), //este evento se acaba en dos horas 
    bgcolor : '#fafafa',
    notes   : 'buy the cupe cake'
}]
export const CalendarScreen = () => {

    const eventStyleGetter =( event, start, end, isSelected )=>{
        console.log(event, start, end, isSelected);
        const style = {
            backgroundColor : '#367CF7',
            borderRadius    : '0px',
            opacity         : 0.8,
            display         : 'block',
            color           : 'white',
        }
        return {
            style
        }
    }
    return (
        <div className='calendar-screen'>
            <Navbar />

            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                className='p-4'
                eventPropGetter={ eventStyleGetter } //dispara la función eventStyleGetter 
            />
        </div>
    )
}
