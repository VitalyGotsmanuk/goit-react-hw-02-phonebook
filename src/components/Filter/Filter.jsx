
export const Filter = ({
    filter,
    onChange
}) => {
        
    return (
        <label className="">
                <p>Finde contacts by name</p>
                <input
                    type="text"
                    name="filter"
                    placeholder="Type to search"
                    onChange={onChange}
                    value={filter}
                />
        </label>
    )
}