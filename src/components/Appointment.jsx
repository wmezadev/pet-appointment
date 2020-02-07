import React from 'react';

const Appointment = ({appointment}) => {
    const { pet, owner, date, time, symptom } = appointment;
    return (
        <div className="appointment">
            <p>Pet: <span>{pet}</span></p>
            <p>Owner: <span>{owner}</span></p>
            <p>Date: <span>{date}</span></p>
            <p>Time: <span>{time}</span></p>
            <p>Symptom: <span>{symptom}</span></p>
        </div>
      );
}
 
export default Appointment;