import { Modal, Button, Form } from "react-bootstrap";
import { getProfileById, addPost } from "../assets/fetch"

import { useEffect, useState } from "react"
import "./PostModal.css";

const PostModal = ({ show, onHide, onUpdate }) => {
  const [myProfile, setMyProfile] = useState({});
  const [pictureFile, setPictureFile] = useState(null)

  const [data, setData] = useState({
    text: "",
    image: ''
  });

  useEffect(() => {
    getProfileById("me", setMyProfile);
  }, []);

  

  const getData = (e) => {
    setData({ text: e.currentTarget.value});
  };

  const handlePost = () => {
    let formData = null
    if (pictureFile) {
      formData = new FormData()
      formData.append('post',pictureFile)
    }
    addPost(data, formData)
}

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create a post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className='d-flex profile-image-container'>
          <img src={myProfile.image} alt='profile' className='w-100'></img>
          </div>
        <Form id="post-form"
        className="w-100"
        onSubmit={e => {
          e.preventDefault()
          handlePost()
          setData({ text: "" })
          setTimeout(()=>{
            onUpdate()
          },2000) 
          onHide()
        }}
            >
          <Form.Group
            className="mb-3 post-text"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control as="textarea" rows={3} placeholder='What do you want to talk about' value={data.text} onChange={e => getData(e)} />
          </Form.Group>
          <Form.Group>

            <Form.Control type="file" onChange={e => setPictureFile(e.target.files[0])} />
          </Form.Group>
          {/* <button className="upload-btn" type="file">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
          </button> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" form="post-form">
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PostModal;
