import { useState } from "react"
import ExperienceModal from "../ProfilePage/ExperienceModal/ExperienceModal"
import "./experience.css"
import SingleExperience from "./SingleExperience"

const ExperienceRow = ({ experiencesData, onUpdate, isMe }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="experience-page">
      <div className="d-flex justify-content-between">
        <h5 className="experience-title">Experience</h5>
        {isMe && (
          <button className="editBtn" onClick={handleShow}>
            <i className="fas fa-plus"></i>
          </button>
        )}
      </div>
      {experiencesData.map(experience => (
        <SingleExperience key={experience._id} isMe={isMe} experienceData={experience} onUpdate={onUpdate} />
      ))}
      <ExperienceModal show={show} onHide={handleClose} action="adding" onUpdate={onUpdate} />
    </div>
  )
}

export default ExperienceRow
