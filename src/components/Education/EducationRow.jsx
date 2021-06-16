import React from "react"
import { useState } from "react"
 import SingleEducation from "./SingleEducation"
 import EducationModal from '../MyProfile/EducationModal/EducationModal'
import "./education.css"

const  EducationRow = ()=> {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="education-page">
      <div className="d-flex justify-content-between">
        <h5 className="education-title">Education</h5>
        <button className="text-muted p-0" onClick={handleShow}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <SingleEducation  />
      <EducationModal show={show} onHide={handleClose} />
      </div>
      /* <Row>
        <Col md={10}>
          <h5 className="profile-title">Education</h5>
        </Col>
        <Col md={2} className="text-right">
          <button className="text-muted">
            <i className="fas fa-plus"></i>
          </button>
        </Col>
      </Row>

      <Row className="education-row">
        <Col md={2}>
          <SingleEducation image="https://via.placeholder.com/150" />
        </Col>
        <Col md={8} className="pt-5">
          <Education school="Lorem ipsum dolor sit amet consectetur " degree="Masters" year="2010-2015" />
          <Description courses="Some courses you took" />
          <Description courses="Some courses you took" />
          <Description courses="Some courses you took" />
          <Description courses="Some courses you took" />
          <hr className="mt-3 pl-5"></hr>
        </Col>
        <Col md={2} className="mt-5 text-right">
          <button className="text-muted">
            <i className="fas fa-pencil-alt"></i>
          </button>
        </Col>
      </Row>
      <Row className="education-row">
        <Col md={2}>
          <SingleEducation image="https://via.placeholder.com/150" />
        </Col>
        <Col md={8} className="pt-5">
          <Education school="Lorem ipsum dolor sit amet consectetur " degree="Masters" year="2010-2015" />
          <Description courses="Some courses you took" />
          <Description courses="Some courses you took" />
          <Description courses="Some courses you took" />
          <Description courses="Some courses you took" />
          <hr className="mt-3"></hr>
        </Col>
      </Row>
    </div> */
  )
}
export default EducationRow