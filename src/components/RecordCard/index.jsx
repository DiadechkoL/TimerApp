import React, { useContext, useEffect, useState } from 'react'
import s from './index.module.css'
import { Context } from '../../context'


export default function RecordCard({id, name, date, category,check_in, check_out }) {

  const{time, setTime} = useContext(Context);

  const [newCheckIn , setNewCheckIn] = useState(check_in );
  const [newCheckOut , setNewCheckOut] = useState(check_out );

  useEffect(() => {
    setNewCheckIn(check_in);
}, [check_in]);

useEffect(() => {
    setNewCheckOut(check_out);
}, [check_out]);

  const handleCheckInChange = (event) => {
    setNewCheckIn(event.target.value);
    
};

const changeTime = (id, newCheckIn, newCheckOut) => {
  const targetTime = time.find(time => time.id === id);
  targetTime.check_in = newCheckIn;
  targetTime.check_out = newCheckOut;
  setTime([...time]);
}; 

       

const handleCheckOutChange = (event) => {
    setNewCheckOut(event.target.value);
    
};




  return (
    <div className={s.card}>
        <h2>Hi, {name}!</h2>
        <p>{date}</p>
        <p>Your spending time during {category}:</p>
        <div>
                <p>Check-in time:</p>
                <input type="text" value={newCheckIn} onChange={handleCheckInChange} />
            </div>
            <div>
                <p>Check-out time:</p>
                <input type="text" value={newCheckOut} onChange={handleCheckOutChange} />
            </div>

            <button onClick={() => changeTime(id)}>Save</button>
       
      
    </div>
  
)}