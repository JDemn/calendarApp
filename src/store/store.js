import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';

//Establecer como va a lucir el store de la aplicación

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    //necesita que le pasemos en donde estan nuestros reducer. en este caso el rootReducer.js
    //aquí se ocupa igual configurar thank y las herramientas de desarrollo para redux
    rootReducer,
    composeEnhancers(
        //pasamos el middleware
        applyMiddleware( thunk )
    )
)


//al final debemos proveer de todo este store desde el nivel más alto a toda nuestra aplicación . En estencaso en  el archivo CalendarApp.js