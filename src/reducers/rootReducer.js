import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';

//Es la combianación de todos los reducers que tenemos en nuetra app
// En este caso son : uno de autenticaci[on], uno del calendario y uno del Ui 

export const rootReducer = combineReducers({
    //recibe un objeto que indica como va a lucir todo el store
    ui : uiReducer
})