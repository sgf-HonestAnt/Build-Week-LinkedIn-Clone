import { useEffect } from "react" 
import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { addEditEducation, deleteEducation } from "../../assets/fetch"
import UploadImage from "../../assets/UploadImage"

const EducationModal = ({ show, onHide, action, onUpdate, educationData, id }) => {
  const [formInput, setFormInput] = useState({})
  const [isEndDate, setIsEndDate] = useState(true)
  const [pictureFile, setPictureFile] = useState(null)

  const getInputData = (property, e) => {
    setFormInput({ ...formInput, [property]: e.currentTarget.value })
  }

  const handleSubmit = () => {
    let formData = null
    if (pictureFile) {
      formData = new FormData()
      formData.append("education", pictureFile)
    }
    addEditEducation(educationData ? educationData._id : "", formInput, formData)
    setFormInput({
      institute: "",
      course: "",
      location: "",
      years: "",
      image: "",
    })
  }

  const handleDelete = () => {
    deleteEducation(educationData._id)
  }

  useEffect(() => {
    setFormInput({
      institute: educationData ? educationData.institute : "",
      course: educationData ? educationData.course : "",
      location: educationData ? educationData.startDate : "",
      years: educationData ? educationData.years : "",
      image: educationData ? educationData.image : "",
    })
  }, [educationData])

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{action === "adding" ? "Add education" : "Edit education"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          id="education-form"
          onSubmit={e => {
            e.preventDefault()
            handleSubmit()
            setTimeout(() => onUpdate(), 2000)
            onHide()
          }}
        >
          <Form.Group>
            <Form.Label>Institute</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              required
              value={formInput.institue}
              onChange={e => getInputData("institute", e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Course</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              required
              value={formInput.course}
              onChange={e => getInputData("course", e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="..." required value={formInput.location} onChange={e => getInputData("location", e)} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Years</Form.Label>
            <Form.Control as="textarea" rows={3} required value={formInput.years} onChange={e => getInputData("years", e)} />
          </Form.Group>

          {formInput?.image && <img src={formInput.image} alt="post" className="img-fluid" />}

          <Form.Group>
          <UploadImage image={formInput.image} />{/* replaces Form.Label */}
            <Form.Control id="file-input" type="file" onChange={e => setPictureFile(e.target.files[0])} className="d-none" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {action === "editing" && (
          <Button
            variant="danger"
            onClick={() => {
              handleDelete()
              onUpdate()
              onHide()
            }}
          >
            Delete
          </Button>
        )}
        <Button variant="primary" type="submit" form="education-form">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EducationModal