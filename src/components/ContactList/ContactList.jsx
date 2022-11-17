import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/phonebook/contacts/operation.contact';
import { getContactList } from 'redux/selector';
import { Item, Button } from './ContactList.styled';

export const ContactList = () => {

    const dispatch = useDispatch();
    const getContactItem = useSelector(getContactList);
    
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
      const removeContact = id => {
    dispatch(deleteContact(id));
  };
    
    return (
        <ul>
            {getContactItem.map(({ id, name, number }) => {
                return (
                    <Item key={id}>
                        {name}: {number}
                        <Button
                            onClick={() => {
                                removeContact(id);
                            }}
                        >
                            Delete
                        </Button>
                    </Item>
                )
            })}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            createdAt: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.node,
            number: PropTypes.node,
            id: PropTypes.string.isRequired,
        })
    ),
};