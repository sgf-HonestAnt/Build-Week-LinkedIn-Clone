import { useState } from "react"
import ExperienceModal from "../MyProfile/ExperienceModal/ExperienceModal"

const SingleExperience = ({ experienceData, onUpdate }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="single-experience d-flex my-2">
      <img src={experienceData.image || "https://via.placeholder.com/150"} alt="" height="56px" />
      <div className="d-flex flex-column ml-3 mr-1 w-100">
        <div className="d-flex justify-content-between">
          <h6>{experienceData.role}</h6>
          <button className="editBtn mr-1" onClick={handleShow}>
            <i className="fas fa-pencil-alt"></i>
          </button>
        </div>
        <p>{experienceData.company}</p>
        <p className="font-grey">{`${new Date(experienceData.startDate).toLocaleDateString()} - ${
          experienceData.endDate ? new Date(experienceData.endDate).toLocaleDateString() : ""
        }`}</p>
        <p className="font-grey">{experienceData.area}</p>
        <p>{experienceData.description}</p>
        <hr className="my-3" />
      </div>
      <ExperienceModal show={show} onHide={handleClose} action="editing" onUpdate={onUpdate} experienceData={experienceData} />
    </div>
  )
}

export default SingleExperience
