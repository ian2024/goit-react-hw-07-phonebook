import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operation.contact";


const status = {
    Init: 'init',
    Loading: 'loading',
    Success: 'success',
    Error: 'error',
};


const initialState = {
    items: [],
    isLoading: false,
    error: null,

};

const contactSlice = createSlice({
    name: 'contactList',
    initialState,
    extraReducers: (builder) => builder.addCase(fetchContacts.pending, state => {
            state.status = status.Loading;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
           state.status = status.Success;
            state.items = [...action.payload];
    })
    .addCase(fetchContacts.rejected, state => {
            state.status = status.Error;
    })
    .addCase(addContact.pending, state => {
            state.status = status.Loading;
    })
    .addCase(addContact.fulfilled, (state, action) => {
            state.status = status.Success;
            state.items = [...state.items, action.payload];
    })
    .addCase(addContact.rejected, state => {
            state.status = status.Error;
    })
    .addCase(deleteContact.pending, state => {
           state.status = status.Loading;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
             state.status = status.Success;
             state.items = state.items.filter(item => item.id !== action.payload.id);
    })
    .addCase(deleteContact.rejected,  state => {
            state.status = status.Error;
    })
});

export default contactSlice.reducer;