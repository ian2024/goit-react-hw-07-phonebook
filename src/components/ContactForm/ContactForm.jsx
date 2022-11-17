import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebook/contacts/operation.contact';
import { getContactList } from 'redux/selector';
import { Form, Input, Label, Button } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();
    const getContactItem = useSelector(getContactList);

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
        
            default:
                return;
        }
    };


    const handleSubmit = e => {
        if (getContactItem.some(contact => contact.name === name)) {
            return alert('NoNoNo already been added!');
            
        }
        e.preventDefault();

        dispatch(addContact({ name: name, phone: number }));

        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };





    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                Name
                <Input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                />
            </Label>
            <Label>
                Number
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                />
            </Label>
            <Button type="submit">Add contact</Button>
        </Form>
    );
    

};