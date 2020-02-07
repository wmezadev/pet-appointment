import React, { Fragment, useState } from 'react';

const Form = () => {
    // Set appointment state
    const [appointment, setAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptom: ''
    })

    // Update state when inputs changes
    const handleChange = () => {
        console.log('Writing')
    }

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
                    onChange={handleChange}
                />
                <label>Owner's name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner's name"
                    onChange={handleChange}
                />
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                />
                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                />
                <label>Symptom</label>
                <textarea
                    name="symptom"
                    className="u-full-width"
                    onChange={handleChange}
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