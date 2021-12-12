import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import 'react-big-calendar/lib/css/react-big-calendar.css';



const localizer = momentLocalizer(moment) // or globalizeLocalizer

//manejo de fechas con libreria moment no js
const events = [{
    title   : 'Birthday of the boss',
    start   : moment().toDate(), //manejo de fechas con moment
    end     : moment().add(2,'hours').toDate(), //este evento se acaba en dos horas 
    bgcolor : '#fafafa',
    notes   : 'buy the cupe cake',
    user    : {
        _id     : '123',
        name    : 'José'
    }
}]
export const CalendarScreen = () => {
    const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'month');

    //estar pendientes de acciones que van a suceder y reaccionar ante ellas
    const onDoubleClick = (e)=> {
        console.log(e);
    }
    const onSelectEvent =(e)=> {
        console.log(e)
    }
    const onViewChange =(e)=> {
        setlastView(e)
        // console.log(e)
        localStorage.setItem('lastView', e );
    }
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
                localizer = { localizer }
                events = { events }
                startAccessor ="start"
                endAccessor = "end"
                className = 'p-4'
                eventPropGetter = { eventStyleGetter } //dispara la función eventStyleGetter 
                onDoubleClickEvent = { onDoubleClick }
                onSelectEvent = { onSelectEvent }
                onView = { onViewChange }
                view = { lastView }
                //mostrar un componente externo como referencia
                components={
                    {
                        event : CalendarEvent
                    }
                }
            />
            <CalendarModal />
        </div>
    )
}
