import { Modal, Button, Form } from "react-bootstrap"
import UploadImage from "../../assets/UploadImage"

const EducationModal = ({ show, onHide,image }) => {
  return (

    // DUMMY FORM

    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Education</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="education-form">
          <Form.Group>
            <Form.Label>Course</Form.Label>
            <Form.Control type="text" placeholder="Strive School" required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Institute</Form.Label>
            <Form.Control type="text" placeholder="Full Stack Web Development" required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Berlin, Germany" required />
          </Form.Group>

          <div className="d-flex">
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="month" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control type="month" />
            </Form.Group>
          </div>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} required />
          </Form.Group>

          {/* This seems to be happening because the modals are not in the same folder as their home components. useState not passing image to the modal */}
          <img src="https://media-exp3.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_200_200/0/1593351903670?e=1632355200&v=beta&t=01RObunrVhJxBy0F7ekd6oGjw551Tn4tOQCol9x7WzA" alt="post" className="img-fluid" />

          <Form.Group>
            <UploadImage image={image} />{/* replaces Form.Label */}
            <Form.Control id="file-input" type="text" placeholder="https://myImage.png" className="d-none" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" form="experience-form">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default EducationModal
