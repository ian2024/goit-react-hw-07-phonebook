import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContactsList, addContactsList, removeContact } from "services/API";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',

    async (_, thunkAPI) => {
        try {
            const r = await getContactsList();
            return r;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (data, thunkAPI) => {
        try {
            const r = await addContactsList(data);
            return r;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const r = await removeContact(id);
            return r;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);