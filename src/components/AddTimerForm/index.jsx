import React, { useContext, useEffect, useState } from 'react'
import s from './index.module.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Context } from '../../context';

export default function AddTimerForm() {
    const {data} = useContext(Context);
    const{time, setTime} = useContext(Context);


    const submit = (event) => {
        event.preventDefault();

        const {date , name , category , check_in , check_out  } = event.target;

        const add_time ={
          id: Date.now(),
          date:date.value,
          name:name.value,
          category:category.value,
          check_in:check_in.value,
          check_out:check_out.value

      }
      
        setTime([...time, add_time]);
       data(add_time);


        localStorage.setItem('add_time', JSON.stringify([...time, add_time]));

        event.target.reset();
       
    
    }
  
    
     
    const [date , setDate] = useState(new Date());


  return (
    <div className={s.all_form} >
        <p>Your spending time : </p>
        <form className={s.timer_form} onSubmit={submit}>

            <div>
                <p>Choose the date:</p>
                <DatePicker onChange={setDate}
          selected={date} name='date'
/>
            </div>

            <p>Enter your name:</p>
            <input type="text" placeholder='ex: Yulia...' name='name' />



            <p>Enter your category:</p>
            <input type="text " placeholder='ex: work , pause...' name='category'/>

            <p>Enter your check-in time:</p>
            <input type="text" placeholder='ex: 02:00 ' name='check_in' />

            <p>Enter your check-out time:</p>
            <input type="text" placeholder='ex: 02:00 ' name='check_out' />

            <button>Confirm</button>

        </form>

    </div>
  )
}
