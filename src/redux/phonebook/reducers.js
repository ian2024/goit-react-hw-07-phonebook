import { combineReducers } from "@reduxjs/toolkit";
import contactReducer from './contacts/sliceContact';
import filterReducer from './filter/sliceFilter';

export const rootReducer = combineReducers({
    contactList: contactReducer,
    filter: filterReducer,
});