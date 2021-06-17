import { useEffect } from "react"
import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { editPost, deletePost } from "../assets/fetch"

const EditPostModal = ({ show, onHide, postInfo, onUpdate, onDelete }) => {
  const [postDetails, setPostDetails] = useState(null)
  useEffect(() => setPostDetails({ text: postInfo.text, image: postInfo.image }), [postInfo])

  const submitForm = type => {
    type === "edit" ? editPost(postInfo._id, postDetails) : deletePost(postInfo._id)
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Test</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={postDetails?.text}
              onChange={e => setPostDetails({ ...postDetails, text: e.currentTarget.value })}
            />
          </Form.Group>
          {postDetails?.image && <img src={postDetails.image} alt="post" className="img-fluid" />}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            submitForm("delete")
            onDelete()
            onHide()
          }}
        >
          Delete
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            submitForm("edit")
            onUpdate()
            onHide()
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditPostModal
