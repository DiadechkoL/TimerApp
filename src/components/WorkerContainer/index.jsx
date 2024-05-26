import React, {useContext} from 'react'
import { Context } from '../../context'
import RecordCard from '../RecordCard'
import s from './index.module.css'


export default function WorkerContainer() {

    const{time, setTime} = useContext(Context);
    
    
  return (
    <div className={s.cont}>
        { 
        time.map(el => <RecordCard key={el.id} {...el} />)}
    </div>
  )
}
