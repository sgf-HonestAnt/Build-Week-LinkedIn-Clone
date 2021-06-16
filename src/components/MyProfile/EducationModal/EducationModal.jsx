import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

const EducationModal = ({ show, onHide}) => {

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Some title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          id="education-form"
        >
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder=" "
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Ex. Berlin" required />
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

          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="https://myImage.png" />
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
