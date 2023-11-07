import { ContactItem } from './ContactItem';

//import css from './FriendList.module.css';

export const ContactList = ({ contacts, handleDeleteContact }) => {
    //console.log(filter)

    return (
        <ul className="{css.friendList}">
            {contacts
                //.filter(filter => filter.name === filter)
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