import css from './ContactList.module.css';

export const ContactItem = ({ name, number, id, handleDeleteContact }) => {
    
    return (
        <li className={css.item} id={id}>
            <p className="">{name}: </p>
            <p className="">{number}</p>
            <button
                onClick ={() => handleDeleteContact(id) }
                className=""
                type="button">Delete</button>
        </li>
    )
}