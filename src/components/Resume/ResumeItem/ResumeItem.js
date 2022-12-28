import React from 'react'
import './ResumeItem.css'

const ResumeItem = ({title,value}) => {
  return (
    <div className="resume-item-container">
      <div className="resume-item-header">
        <p className="resume-item-header-title">
           {title}
        </p>
        <span className="resume-item-total">
            {value}
        </span>
      </div>
    </div>
  )
}

export default ResumeItem