import {combineReducers,createStore  } from 'redux'
import ReducerTable from './reducer/ReducerTable'

var allReducer=combineReducers({
    ReducerTable
})
var store=createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);
store.subscribe(() => {
    localStorage.setItem('dataTable',JSON.stringify(store.getState().ReducerTable.dataTable));
})
export default store;