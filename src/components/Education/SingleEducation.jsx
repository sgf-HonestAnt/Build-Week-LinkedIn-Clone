import React from "react"
import { useState } from "react"
import EducationModal from "../ProfilePage/EducationModal/EducationModal"

export default function SingleEducation({ isMe }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="single-education d-flex my-2">
      <img src="https://via.placeholder.com/150" alt="" height="56px" />
      <div className="d-flex flex-column ml-3 w-100">
        <div className="d-flex justify-content-between">
          <h6>Some data</h6>
          {isMe && (
            <button onClick={handleShow}>
              <i className="fas fa-pencil-alt"></i>
            </button>
          )}
        </div>
        <p>Some data here</p>
        <p className="font-grey">More data</p>
        <p className="font-grey">More and more data</p>
        <p>Even more data</p>
        <hr className="my-3" />
      </div>
      <EducationModal show={show} onHide={handleClose} />
    </div>
  )
}
