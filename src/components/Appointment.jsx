import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment, deleteAppointment}) => {

    const { pet, owner, date, time, symptom, id } = appointment;
    return (
        <div className="appointment">
            <p>Pet: <span>{pet}</span></p>
            <p>Owner: <span>{owner}</span></p>
            <p>Date: <span>{date}</span></p>
            <p>Time: <span>{time}</span></p>
            <p>Symptom: <span>{symptom}</span></p>

            <button
                className="button delete u-full-width"
                onClick={() => deleteAppointment(id)}
            >Delete &times;</button>
        </div>
      );
}

// Type checking
Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

 
export default Appointment;