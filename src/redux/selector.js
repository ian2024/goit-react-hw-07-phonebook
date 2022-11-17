export const getContactList = state =>
state.contactList.items.filter(contact => contact.name.toLowerCase().includes(state.filter.toLowerCase()));

export const getFilter = state => state.filter;