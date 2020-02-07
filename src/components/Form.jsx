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
    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name] :e.target.value
        })
    }

    // Extract values
    const {pet, owner, date, time, symptom} = appointment;

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
                    value={pet}
                />
                <label>Owner's name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner's name"
                    onChange={handleChange}
                    value={owner}
                />
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />
                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />
                <label>Symptom</label>
                <textarea
                    name="symptom"
                    className="u-full-width"
                    onChange={handleChange}
                    value={symptom}
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