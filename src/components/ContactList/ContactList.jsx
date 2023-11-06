import { ContactItem } from './ContactItem';

//import css from './FriendList.module.css';

export const ContactList = ({ contacts, filtered, handleDeleteContact }) => {
    console.log(filtered)

    return (
        <ul className="{css.friendList}">
            {contacts.map(contacts => (
                <ContactItem
                    name={contacts.name}
                    number={contacts.number}
                    key={contacts.id}
                    id={contacts.id}
                    handleDeleteContact={handleDeleteContact}
                    filtered={filtered}
                />
            ))}
        </ul>
    )
}