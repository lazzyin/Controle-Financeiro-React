import React from 'react'
import ResumeItem from './ResumeItem/ResumeItem'
import './Resume.css'
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from 'react-icons/fa'

const Resume = ({income,expense,total}) => {
  return (
      <div className="resume-container">
          <ResumeItem title="Entradas" icon={FaRegArrowAltCircleUp} value={income}/>
          <ResumeItem title="Saidas" Icon={FaRegArrowAltCircleDown} value={expense}/>
          <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
      </div>
  )
}

export default Resume