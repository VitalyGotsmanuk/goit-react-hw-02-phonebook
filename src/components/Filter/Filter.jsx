
export const Filter = ({
    value,
    onChange

}) => {
       
    
    return (
        <label className="">
                <p>Finde contacts by name</p>
                <input
                    type="text"
                    name="filter"
                    required
                    onChange={onChange}
                    value={value}
                />
            </label>
    )

}