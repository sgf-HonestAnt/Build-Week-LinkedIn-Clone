import React from "react"
import { useState } from "react"
import EducationModal from "../ProfilePage/EducationModal/EducationModal"

export default function SingleEducation({ isMe, image, institute, course, location, moreinfo, years}) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="single-education d-flex align-items-start my-2 px-1">
      <img src={image} alt="" height="56px" />
      <div className="d-flex flex-column ml-3 w-100">
        <div className="d-flex justify-content-between">
          <h6>{institute}</h6>
          {isMe && (
            <button onClick={handleShow}>
              <i className="fas fa-pencil-alt education-pencil-icon"></i>
            </button>
          )}
        </div>
        <p>{course}</p>
        <p>{location}</p>
        <p>{moreinfo}</p>
        <p className="text-muted">{years}</p>
        <hr className="my-3" />
      </div>
      <EducationModal show={show} onHide={handleClose} />
    </div>
  )
}
