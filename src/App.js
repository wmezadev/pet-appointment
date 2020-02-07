import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  // Schedule
  const [schedule, setSchedule] = useState([]);

  // Add appointment to the schedule
  const makeAppointment = appointment => {
    setSchedule([...schedule, appointment]);
  }

  return (
    <Fragment>
      <h1> Patient Administration </h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              makeAppointment={makeAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>Schedule</h2>
            {
              schedule.map(appointment => (
                <Appointment
                  key={appointment.id}
                  appointment={appointment}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
