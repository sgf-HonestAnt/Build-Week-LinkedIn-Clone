import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SingleEducation from "./SingleEducation"
import "./education.css"
import Education from "./Education"
import Description from "./Description"
export default function EducationRow() {
  return (
    <div className="profile-page">
      <Container>
        <Row>
          <Col md={10}>
            <h4 className="profile-title text-muted">Education</h4>
          </Col>
          <Col md={2} className="text-right">
            <button className="text-muted">
              <i class="fas fa-plus"></i>
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
              <i class="fas fa-pencil-alt"></i>
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
      </Container>
    </div>
  )
}
