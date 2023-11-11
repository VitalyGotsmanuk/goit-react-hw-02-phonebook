import css from './Filter.module.css';

export const Filter = ({
    filter,
    onChange
}) => {
        
    return (
        <div className={css.filter}>
        <label >
                <p>Finde contacts by name</p>
                <input
                    type="text"
                    name="filter"
                    placeholder="Type to search"
                    onChange={onChange}
                    value={filter}
                />
        </label></div>
    )
}