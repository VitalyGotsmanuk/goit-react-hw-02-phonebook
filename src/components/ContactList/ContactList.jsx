import { ContactItem } from './ContactItem';

import css from './ContactList.module.css';

export const ContactList = ({ contacts, filter, handleDeleteContact }) => {

    return (
        <ul className={css.list}>
            {contacts
                // .filter((contacts) => contacts.name.toLowerCase().includes(filter.toLowerCase()))
                .map(contacts => (
                <ContactItem
                    name={contacts.name}
                    number={contacts.number}
                    key={contacts.id}
                    id={contacts.id}
                    handleDeleteContact={handleDeleteContact}
                />
            ))}
        </ul>
    )
}