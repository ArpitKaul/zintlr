import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


const Clndr = () => {
    const [date , setDate] = useState(new Date());

    const onChange = date=> {
        setDate(date)
    }
  return (
    <div className=' '>
      {/* <Calendar  onChange={onChange} value={date}/> */}
    </div>
  )
}
export default Clndr
