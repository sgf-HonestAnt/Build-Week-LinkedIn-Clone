import { Modal, Button, Form } from "react-bootstrap"

const ExperienceModal = ({ show, onHide, action }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{action === "adding" ? "Add experience" : "Edit experience"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Ex. Web Developer" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Ex. Strive School" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Ex. Berlin" />
          </Form.Group>

          <Form.Group>
            <Form.Check type="checkbox" label="I am currently working in this role" />
          </Form.Group>

          <div className="d-flex justify-content-around">
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="month" />
            </Form.Group>
            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control type="month" />
            </Form.Group>
          </div>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="https://myImage.png" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ExperienceModal
