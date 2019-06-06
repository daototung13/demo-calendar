import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import './App.css';
import events from './events'
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
const localizer = BigCalendar.momentLocalizer(moment);

const MyCalendar = (props) => {
  return(
    <div className='calendar'>
      <BigCalendar
        events={events}
        views={allViews}
        step={60}
        showMultiDayTimes
        max={2015, 17, 1}
        defaultDate={new Date(2015, 3, 1)}
        components={{
          timeSlotWrapper: ColoredDateCellWrapper,
        }}
        localizer={localizer}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MyCalendar />
    </div>
  );
}


export default App;
