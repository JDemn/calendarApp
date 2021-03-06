import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/login" element = { <LoginScreen /> } /> 
                    <Route exact path="/" element = { <CalendarScreen /> } />
                    <Route path="*" element={<Navigate to ="/" />}/>
                </Routes>
            </div>
        </Router>
    )
}
