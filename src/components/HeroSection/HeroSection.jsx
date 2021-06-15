import { useState } from "react"
import { Card, Button, Badge, Modal, Form } from "react-bootstrap"
import Logo from "../assets/LinkedIn-Logos/LI-Logo.png"
import { editProfile, getExperiencesById } from "../assets/fetch"

import "./HeroSection.css"

const HeroSection = ({ profileData, onUpdate }) => {

  const [profileSection, setProfileSection] = useState({
    name: profileData.name,
    surname: profileData.surname,
    email: profileData.email,
    bio: profileData.bio,
    title: profileData.title,
    area: profileData.area,
    image: profileData.image,
  })

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
    <div className="hero">
      <div className="hero-cover p-relative">
        <Card.Img
          variant="top"
          src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F1-office-1516329_1920-1200x299.jpg"       
        />
        <i className="fas fa-pen-square"></i>
        <div className="profile-img-container" style={{backgroundImage: `url("${profileData.image}")`}}></div>
      </div>
      <i className="fas fa-pencil-alt mt-4 mr-4" onClick={handleShow}></i>
      <div className="hero-columns pt-5">
        <div className="mr-5">
          <Card.Body>
            <Card.Title className="mb-0 profile-name">
              {profileData.name} {profileData.surname}
            </Card.Title>
            <Card.Text>
              {profileData.title}
              <br />
              {profileData.area} • {" "}
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

        {/* This div requires a fetch of OUR experiences and should return most recent two. */}
        <div className="mr-5">
          <div className="work-history">
            <div className="mb-2">
              <img src={Logo} alt="..." />
              Company 1
            </div>
            <div className="mb-2">
              <img src={Logo} alt="..." />
              Company 2
            </div>
          </div>

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
                <i className="fab fa-linkedin"></i>Your Profile
                <br />
                linkedin.com/in/{profileData.name}-{profileData.surname}-{profileData._id}
              </div>
              <div>
                <i className="far fa-envelope"></i>Email
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
              <Form
              id="profile-form"
              onSubmit={e => {
                e.preventDefault()
                handleSubmit()
                onUpdate()
                handleClose()
              }}
              >
                <Form.Group className="d-inline-block">
                  <Form.Label>First name *</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder={profileData.name} 
                    value={profileSection.name} 
                    onChange={e => getProfileSectionData("name", e)}
                  />
                </Form.Group>

                <Form.Group className="d-inline-block">
                  <Form.Label>Last name *</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder={profileData.surname} 
                    value={profileSection.surname}
                    onChange={e => getProfileSectionData("surname", e)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Headline *</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={2} 
                    placeholder={profileData.title} 
                    value={profileSection.title} 
                    onChange={e => getProfileSectionData("title", e)}
                  />
                </Form.Group>

                {/* Experience and Education might go here */}

                <Form.Group>
                  <Form.Row>
                    <Form.Label>Country / Region *</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder={profileData.area} 
                      value={profileSection.area} 
                      onChange={e => getProfileSectionData("area", e)}
                    />
                  </Form.Row>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Profile image</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder={profileData.image ? profileData.image : "myprofile.jpg"} 
                    value={profileSection.image}  
                    onChange={e => getProfileSectionData("image", e)}
                  />
                  {/* This should be border-bottom only, with a pencil icon */}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Contact info</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder={profileData.email ? profileData.email : "Profile URL, Email, WeChat ID"} 
                    value={profileSection.email}  
                    onChange={e => getProfileSectionData("email", e)}
                  />
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
