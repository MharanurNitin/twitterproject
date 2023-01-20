import React from 'react'
import Leftsection from '../sections/Leftsection';
import Middlesection from '../sections/Middlesection';
import Rightsection from '../sections/Rightsection';
import style from "./home.module.css";
function Home() {
  return (
    <div className={style.sections}>
        <Leftsection/>
        <Middlesection/>
        <Rightsection/>
    </div>
  )
}

export default Home