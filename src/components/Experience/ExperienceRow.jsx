import { useState } from "react"
import ExperienceModal from "../MyProfile/ExperienceModal/ExperienceModal"
import "./experience.css"
import SingleExperience from "./SingleExperience"

const ExperienceRow = ({ experiencesData }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="experience-page">
      <div className="d-flex justify-content-between">
        <h5 className="experience-title">Experience</h5>
        <button className="text-muted p-0" onClick={handleShow}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      {experiencesData.map(experience => (
        <SingleExperience key={experience._id} experienceData={experience} />
      ))}
      <ExperienceModal show={show} onHide={handleClose} action="adding" />
    </div>
  )
}

export default ExperienceRow
