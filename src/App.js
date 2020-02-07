import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  // Local storage schedule
  let initialSchedule = JSON.parse(localStorage.getItem('schedule'));
  if(!initialSchedule) {
    initialSchedule = [];
  }

  // init Schedule state
  const [schedule, setSchedule] = useState(initialSchedule);

  // useEffect is like componentDidMount and ComponentDidUpdate at the same time
  useEffect(() => {
    // Try get schedule or create it empty
    let initialSchedule = JSON.parse(localStorage.getItem('schedule'));

    if(initialSchedule) {
      localStorage.setItem('schedule', JSON.stringify(schedule))
    } else {
      localStorage.setItem('schedule', JSON.stringify([]));
    }
  }, [ schedule ]);

  // Add appointment to the schedule
  const makeAppointment = appointment => {
    setSchedule([...schedule, appointment]);
  }

  // Delete appointment by ID
  const deleteAppointment = id => {
    const newSchedule = schedule.filter(appointment => appointment.id !== id);
    setSchedule(newSchedule);
  }

  // Conditional message
  const title = schedule.length === 0 ? 'No appointments' : 'Schedule';

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
            <h2>{title}</h2>
            {
              schedule.map(appointment => (
                <Appointment
                  key={appointment.id}
                  appointment={appointment}
                  deleteAppointment={deleteAppointment}
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
