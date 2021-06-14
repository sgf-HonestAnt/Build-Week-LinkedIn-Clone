import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./experience.css"
import Experience from "./Experience"
import SingleExperience from "./SingleExperience"
import JobDescription from "./JobDescription"

export default function ExperienceRow() {
  return (
    <div className="experience-page">
      <Container>
        <Row>
          <Col md={10}>
            <h4 className="experience-title text-muted">Experience</h4>
          </Col>
          <Col md={2} className="text-right">
            <button className="text-muted">
              <i class="fas fa-plus"></i>
            </button>
          </Col>
        </Row>

        <Row className="experience-row">
          <Col md={2}>
            <SingleExperience image="https://via.placeholder.com/150" />
          </Col>
          <Col md={8} className="pt-5">
            <Experience jobTitle="Project Manager " jobPlace="Strive Inc." years="Feb 2018- May 2021" location="Berlin" />
            <JobDescription activities="Some activities you took" />
            <JobDescription activities="Some activities you took" />
            <JobDescription activities="Some activities you took" />
            <JobDescription activities="Some activities you took" />
            <hr className="mt-3 pl-5"></hr>
          </Col>
          <Col md={2} className="mt-5 text-right">
            <button className="text-muted pencil">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </Col>
        </Row>

        <Row className="experience-row">
          <Col md={2}>
            <SingleExperience image="https://via.placeholder.com/150" />
          </Col>
          <Col md={8} className="pt-5">
            <Experience jobTitle="Project Manager " jobPlace="Strive Inc." years="Feb 2018- May 2021" location="Berlin" />
            <JobDescription activities="Some activities you took" />
            <JobDescription activities="Some activities you took" />
            <JobDescription activities="Some activities you took" />
            <JobDescription activities="Some activities you took" />
            <hr className="mt-3 pl-5"></hr>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
