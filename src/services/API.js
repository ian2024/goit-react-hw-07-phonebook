import axios from 'axios';

const contactsApi = axios.create({
    baseURL: 'https://6374f45d48dfab73a4ee04d5.mockapi.io',
});

export const getContactsList = async () => {
    const { data } = await contactsApi.get('/contacts');
    return data;
};

export const addContactsList = async body => {
    const { data } = await contactsApi.post('/contacts', body);
    return data;
};

export const removeContact = async id => {
    const { data } = await contactsApi.delete(`/contacts/${id}`);
    return data;
};