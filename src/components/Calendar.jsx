import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './Calendar.css';

const Calendar = () => {
    const [events,setEvents]=useState([])

    const host = "http://localhost:5000"
    const [rows, setRows] = useState(null)

        
  const changedate=(data)=>{
    const moment = require('moment');

const dateString = data;

// Parse the date string using moment.js
const dateObj = moment(dateString, 'h:mm a Do MMM');
// Format the date object to the desired format
const formattedDate = dateObj.format('YYYY-MM-DD');

// console.log(formattedDate); 
return formattedDate;
//getallevents->store it in an array->iterate over it->take only date and title->pass the date into changedate function->push the date that is returned and the title into events
  }
  const [reload,setReload]=useState(false)
  

  useEffect(() => {
    const getBlogProfile = async () => {
      const response = await fetch(`${host}/api/auth/getevent`, {
        method: 'GET'
      });

      const json = await response.json();
      console.log("homepage   is",json)
      setEvents(json)
    }
    getBlogProfile();
  }, [])
    
  const [date, setDate] = useState(moment());

  const firstDayOfMonth = moment(date).startOf('month').format('d'); // day of the week for the 1st of the month
  const daysInMonth = moment(date).daysInMonth(); // number of days in the month

  const weeks = [];
  let week = [];

  // Add empty cells for days before the 1st of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    week.push(<td key={`empty-${i}`}></td>);
  }

  // Add cells for each day of the month
  for (let i = 1; i <= daysInMonth; i++) {
    const dateObj = moment(date).date(i);
    const event = events.find(event => moment(changedate(event.time)).isSame(dateObj, 'day'));
    const title = event ? event.title : ''; // get title from event or use empty string
    const backgroundColor = event ? event.backgroundColor : ''; // get background color from event or use empty string
    const style = backgroundColor ? { backgroundColor } : {}; // create style object with background color if it exists
    const isCurrentDate = moment().isSame(dateObj, 'day'); // check if this is the current date

    week.push(
      <td key={i} className={isCurrentDate ? 'current-date' : ''} style={style}>
        {title ? (
          <div>
            {i}
            <div className="event-block">{title.slice(0, 20)}{title.length>20?"...":""}</div>
          </div>
        ) : (
          i
        )}
      </td>
    );

    // If this is the last day of the week or the last day of the month, start a new row
    if (week.length === 7 || i === daysInMonth) {
      weeks.push(<tr key={i}>{week}</tr>);
      week = [];
    }
  }

  return (
    <div className="heading"> <h2>Calender</h2>
    <div className="calendar" style={{width:'500px'}}>
    
       
      <table>
        <thead>
          <tr >
            <th colSpan="7" style={{textAlign:'center'}}>{date.format('MMMM YYYY')}</th>
          </tr>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{weeks}</tbody>
      </table>
    </div>
    </div>
  );
};

export default Calendar;
