import { Card, Button, Badge, Modal, Form, Col } from "react-bootstrap"
import { useState } from "react"
import Logo from "../assets/LinkedIn-Logos/LI-Logo.png"

import "./HeroSection.css"

const HeroSection = ({ profileData }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [showContactMe, setShowContactMe] = useState(false)
  const handleCloseContactMe = () => setShowContactMe(false)
  const handleShowContactMe = () => setShowContactMe(true)

  return (
    <div className="hero">
      <div className="hero-cover p-relative">
        <Card.Img
          variant="top"
          src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F1-office-1516329_1920-1200x299.jpg"
        />
        <i className="fas fa-pen-square"></i>
        <img className="profile-pic img-fluid" src={profileData.image} alt="..." />
      </div>
      <i className="fas fa-pencil-alt pt-4 pr-4" onClick={handleShow}></i>
      <div className="hero-columns pt-5">
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
              {/* Include a pop-up modal featuring the following information: 
                        profile.email and "linkedin.com/in/sarah-guinevere-fisher-0073b316b"*/}
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

          {/* Contact me modal */}
          <Modal show={showContactMe} onHide={handleCloseContactMe}>
            <Modal.Header closeButton>
              <Modal.Title>
                {profileData.name} {profileData.surname}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Contact info</h5>
              <div>
                <i class="fab fa-linkedin"></i>Your Profile
                <br />
                linkedin.com/in/{profileData.name}-{profileData.surname}-{profileData._id}
              </div>
              <div>
                <i class="far fa-envelope"></i>Email
                <br />
                {profileData.email}
              </div>
            </Modal.Body>
          </Modal>

          {/* Edit intro modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit intro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* 
                            Industry 
                            */}
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Row>
                    <Col>
                      <Form.Label>First name *</Form.Label>
                      <Form.Control as="textarea" rows={1} placeholder={profileData.name} />
                    </Col>
                    <Col>
                      <Form.Label>Last name *</Form.Label>
                      <Form.Control as="textarea" rows={1} placeholder={profileData.surname} />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <i class="fas fa-plus"></i> Record name pronunciation
                <br />
                Name pronunciation can only be added using our mobile app.
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Pronouns</Form.Label>
                  <Form.Control as="select" placeholder="Please select">
                    <option>She/Her</option>
                    <option>He/Him</option>
                    <option>They/Them</option>
                    <option>Custom</option>
                    {/* Custom should open new text area labelled 'Enter custom pronouns' */}
                  </Form.Control>
                  Let others know how to refer to you. Learn more
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Headline *</Form.Label>
                  <Form.Control as="textarea" rows={2} placeholder={profileData.title} />
                </Form.Group>
                {/* Experience and Education would go here */}
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Row>
                    <Form.Label>Country / Region *</Form.Label>
                    <Form.Control as="textarea" rows={1} placeholder={profileData.area} />
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control as="textarea" rows={1} placeholder="..." />
                    </Col>
                    <Col>
                      <Form.Label>Locations within this area</Form.Label>
                      <Form.Control as="textarea" rows={1} placeholder="..." />
                      {/* This is meant to be a dropdown dependent on postcode */}
                    </Col>
                  </Form.Row>
                </Form.Group>
                {/* Industry would go here */}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Contact info</Form.Label>
                  <Form.Control as="textarea" rows={1} placeholder="Profile URL, Email, WeChat ID" />
                  {/* This should be border-bottom only, with a pencil icon */}
                </Form.Group>
              </Form>
              <Badge pill variant="primary">
                Save
              </Badge>
              {/* This will have an onclick of edit my profile with some of the former details */}
            </Modal.Body>
          </Modal>
        </div>
        <div className="work-history">
          <div className="mb-2">
            <img src={Logo} alt="..." />
            Lorem
          </div>
          <div className="mb-2">
            <img src={Logo} alt="..." />
            Lorem
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
