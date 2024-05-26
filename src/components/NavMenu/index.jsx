import React from 'react'
import {Link} from 'react-router-dom'
import { CiTimer } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
        <Link to='/'><IoMenu /></Link>
        <Link to='/category'><CiTimer /></Link>
        <Link to='/statistic'><IoStatsChart /></Link>
    </div>
  )
}
