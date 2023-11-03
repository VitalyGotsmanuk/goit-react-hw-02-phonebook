
export const ContactForm = ({ 
    
 
}) => {

    return (
        <div>
            <label className="">
                <p>Name</p>
                <input
                    type="text"
                    name="name" required
                    //onChange={}
                    //value={}
                />
            </label>
            
            <label className="">
                <p>Number</p>
                <input
                    type="text"
                    name="number" required
                   //onChange={}
                    //value={}
                />
            </label>
            
            <button className="button" type="button" >Add contact</button>
        </div>
    )
}