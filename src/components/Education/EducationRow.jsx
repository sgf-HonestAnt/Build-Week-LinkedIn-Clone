import React from "react"
import { useState } from "react"
import SingleEducation from "./SingleEducation"
import EducationModal from "../ProfilePage/EducationModal/EducationModal"
import "./education.css"

const EducationRow = ({ educationData, onUpdate, isMe, id }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="education-page">
      <div className="d-flex justify-content-between">
        <h5 className="education-title">Education</h5>
        {isMe && (
          <button className="editBtn" onClick={handleShow}>
            <i className="fas fa-plus"></i>
          </button>
        )}
      </div>
      {educationData.map(education => (
        <SingleEducation key={education._id} isMe={isMe} educationData={education} onUpdate={onUpdate} />
      ))}
      <EducationModal show={show} onHide={handleClose} action="adding" onUpdate={onUpdate} educationData={null} id={id} />
    </div>
  )
}

export default EducationRow 
