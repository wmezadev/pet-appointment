import React, {Fragment} from 'react';

const Form = () => {
    return ( 
        <Fragment>
            <h1> Make appointment</h1> 
            <form>
                <label>Pet's name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet's name"
                />
                <label>Owner's name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner's name"
                />
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                />
                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                />
                <label>Symptom</label>
                <textarea
                    name="symptom"
                    className="u-full-width"
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Submit appointment</button>
            </form>
        </Fragment>
    );
}
 
export default Form;