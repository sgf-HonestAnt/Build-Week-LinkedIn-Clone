import { getProfileById } from "../assets/fetch"
import PostModal from "../PostModal/PostModal"
import { useEffect, useState } from "react"

import "./FeedPostSection.css"

const FeedPostSection = ({ onUpdate }) => {
  const [myProfile, setMyProfile] = useState({})

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    getProfileById("me", setMyProfile)
  }, [])

  return (
    <section className="feedpost-section">
      <div className="d-flex">
        <div className="profile-img-container mr-2" style={{ backgroundImage: `url(${myProfile.image})` }}></div>
        {/* "https://i1.sndcdn.com/avatars-000583246488-dhm5la-t500x500.jpg" */}

        <div className="feedpost-section">
          <button onClick={handleShow} className="post-form">
            Start a post
          </button>
        </div>
        <PostModal show={show} onHide={handleClose} onUpdate={onUpdate} />
      </div>
      <div className="d-flex justify-content-between feedpost-icons">
        <div>
          <i className="fas fa-image mr-2"></i>Photo
        </div>
        <div>
          <i className="fab fa-youtube mr-2"></i>Video
        </div>
        <div>
          <i className="fas fa-calendar-alt mr-2"></i>Event
        </div>
        <div>
          <i className="fab fa-elementor mr-2"></i>Write article
        </div>
      </div>
    </section>
  )
}

export default FeedPostSection
