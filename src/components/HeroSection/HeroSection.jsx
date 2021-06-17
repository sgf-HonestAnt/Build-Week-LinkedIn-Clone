import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card, Button, Badge, Modal, Form } from "react-bootstrap"
import { editProfile } from "../assets/fetch"

import "./HeroSection.css"

const HeroSection = ({ profileData, experiences, onUpdate, isMe }) => {
  const [profileSection, setProfileSection] = useState({})
  const [myExp, setMyExp] = useState({})

  useEffect(() => {
    setProfileSection({
      ...profileData,
    })
    setMyExp ({
      experiences
    })
  }, [profileData, experiences])

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [showContactMe, setShowContactMe] = useState(false)
  const handleCloseContactMe = () => setShowContactMe(false)
  const handleShowContactMe = () => setShowContactMe(true)

  const getProfileSectionData = (property, e) => {
    setProfileSection({ ...profileSection, [property]: e.currentTarget.value })
  }

  const handleSubmit = () => {
    editProfile(profileSection)
  }

  return (
    <div className="hero-section">
      <div className="hero-cover p-relative">
        <Card.Img
          variant="top"
          src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F1-office-1516329_1920-1200x299.jpg"
        />
        {/* <i className="fas fa-pen-square"></i> */}
        <div className="profile-img-container" style={{ backgroundImage: `url("${profileData.image}")` }}></div>
      </div>

      {isMe && (
        <div className="d-flex p-3" style={{ flexDirection: "row-reverse" }}>
          <button className="editBtn" onClick={handleShow}>
            <i className="fas fa-pencil-alt"></i>
          </button>
        </div>
      )}
      <div className="hero-section-columns mt-3">
        <div className="mr-5">
          <Card.Body>
            <Card.Title className="mb-0 profile-name">
              {profileData.name} {profileData.surname}
            </Card.Title>
            <Card.Text>
              {profileData.title}
              <br />
              {profileData.area} •{" "}
              <Button variant="link" onClick={handleShowContactMe}>
                Contact info
              </Button>
              <br />
              <Button variant="link">500+ connections</Button>
            </Card.Text>
            <Card.Text>
              <Badge pill variant="primary">
                Open to
              </Badge>
              <Badge pill variant="light">
                Add section
              </Badge>
              <Badge pill variant="light">
                More
              </Badge>
            </Card.Text>
          </Card.Body>
        </div>

        <div>
          <div className="card-body work-history">            
              {myExp 
              ? experiences.slice(-2).map(x => <div className="mb-2"><img src={x.image} alt="..." /> {x.company}</div>)
              : <></> }
          </div>

          {/* Contact me modal */}
          <Modal show={showContactMe} onHide={handleCloseContactMe}>
            <Modal.Header closeButton>
              <Modal.Title>
                {profileData.name} {profileData.surname}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="contact-modal">
              <h5>Contact info</h5>
              <div className="d-flex justify-content-start">
                <i className="fab fa-linkedin mr-3 p-1"></i>
                <div>
                  Your Profile
                  <Link to={`/profile/${profileData._id}`}>
                    {" "}
                    linkedin.com/in/{profileData.name}-{profileData.surname}-{profileData._id}
                  </Link>
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <i className="far fa-envelope mr-3 p-1"></i>
                <div>
                  Email
                  <Link to={`/profile/${profileData._id}`}>
                    {profileData.email}
                  </Link>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          {/* Edit intro modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit intro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                id="profile-form"
                onSubmit={e => {
                  e.preventDefault()
                  handleSubmit()
                  onUpdate()
                  handleClose()
                }}
              >
                <Form.Group className="d-inline-block col-6 pl-0">
                  <Form.Label>First name *</Form.Label>
                  <Form.Control type="text" value={profileSection.name} onChange={e => getProfileSectionData("name", e)} />
                </Form.Group>

                <Form.Group className="d-inline-block col-6 p-0">
                  <Form.Label>Last name *</Form.Label>
                  <Form.Control type="text" value={profileSection.surname} onChange={e => getProfileSectionData("surname", e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Headline *</Form.Label>
                  <Form.Control as="textarea" rows={2} value={profileSection.title} onChange={e => getProfileSectionData("title", e)} />
                </Form.Group>

                {/* Experience and Education might go here */}

                <Form.Group>
                  <Form.Row>
                    <Form.Label>Country / Region *</Form.Label>
                    <Form.Control type="text" value={profileSection.area} onChange={e => getProfileSectionData("area", e)} />
                  </Form.Row>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Profile image</Form.Label>
                  <Form.Control type="text" value={profileSection.image} onChange={e => getProfileSectionData("image", e)} />
                  {/* This should be border-bottom only, with a pencil icon */}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Contact info</Form.Label>
                  <Form.Control type="text" value={profileSection.email} onChange={e => getProfileSectionData("email", e)} />
                  {/* This should be border-bottom only, with a pencil icon */}
                </Form.Group>
              </Form>
              <Button variant="primary" type="submit" form="profile-form">
                Save
              </Button>
              {/* This will have an onclick of edit my profile with some of the former details */}
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
