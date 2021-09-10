import { useState } from "react"
import EducationModal from "../ProfilePage/EducationModal/EducationModal"

const SingleEducation = ({ educationData, onUpdate, isMe }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="single-education d-flex align-items-start my-2">
      <img src={educationData.image || "https://via.placeholder.com/150"} alt="" width="56px" />
      <div className="d-flex flex-column ml-3 mr-1 w-100">
        <div className="d-flex justify-content-between">
          <h6>{educationData.course}</h6>
          {isMe && (
            <button className="editBtn mr-2" onClick={handleShow}>
              <i className="fas fa-pencil-alt education-pencil-icon"></i>
            </button>
          )}
        </div>
        <p>{educationData.institute}</p>
        <p className="font-grey">{educationData.years}</p>
        <p className="font-grey">{educationData.location}</p>
        <hr className="my-3" />
      </div>
      <EducationModal show={show} onHide={handleClose} action="editing" onUpdate={onUpdate} educationData={educationData} />
    </div>
  )
}

export default SingleEducation
