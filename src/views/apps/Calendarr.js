
// import React from 'react'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// import interactionPlugin from '@fullcalendar/interaction';
// export default function Calendarr() {
//     const handleDateClick = (arg) => {
//         // bind with an arrow function
//         alert(arg.dateStr);
//       };
//   return (
//   <div className='container my-4'>  <FullCalendar
//     plugins={[ dayGridPlugin,interactionPlugin ]}
//     initialView="dayGridMonth"
//     weekends={false}
//   events={[
//      { // this object will be "parsed" into an Event Object
//       title: 'The Title', // a property!
//       start: '2023-08-01', // a property!
//       end: '2023-08-03' // a property! ** see important note below about 'end' **
//     }
//   ]}
//   selectable
//   dateClick={handleDateClick}
//   /></div> 
//   )
// }

import React from 'react'

export default function Calendarr() {
  return (
    <div>Calendarr</div>
  )
}
