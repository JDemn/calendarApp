import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
//idioma
import 'moment/locale/es';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
//css
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es'); //poner los días de la semana en español

const localizer = momentLocalizer(moment) // or globalizeLocalizer

//manejo de fechas con libreria moment no js
const events = [{
    title   : 'Birthday of the boss',
    start   : moment().toDate(), //manejo de fechas con moment
    end     : moment().add(2,'hours').toDate(), //este evento se acaba en dos horas 
    bgcolor : '#fafafa'
}]
export const CalendarScreen = () => {
    return (
        <div className='calendar-screen'>
            <Navbar />

            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                className='p-4'
                messages= { messages }
            />
        </div>
    )
}
