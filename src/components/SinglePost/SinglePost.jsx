import React from "react"
import { Alert } from "react-bootstrap"
import "./singlepost.css"
import { useState } from "react"
import { useEffect } from "react"
import { getProfileById } from "../assets/fetch"
import EditPostModal from "./EditPostModal"

const SinglePost = ({ postInfo, onUpdate }) => {
  const [readMore, setReadMore] = useState(false)
  const [userId, setUserId] = useState(null)
  const [userInfo, setUserInfo] = useState(null)
  const [wasDeleted, setWasDeleted] = useState(false)

  // Modal stuff
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const currentDate = new Date()
  const timestamp = currentDate.getMinutes()

  useEffect(() => {
    setUserId(postInfo.user._id || postInfo.user)
    if (userId) getProfileById(userId, setUserInfo)
  }, [userId, postInfo])

  const handleDelete = () => setWasDeleted(true)

  if (wasDeleted)
    return (
      <Alert variant="danger" className="my-3">
        Post deleted
      </Alert>
    )

  return (
    <>
      <div className="section-card p-3">
        <div className="d-flex mb-2 single-post">
          <img src={userInfo?.image || "https://via.placeholder.com/150"} alt="" className="user-picture" />
          <div className="ml-3">
            <p>{postInfo.username}</p>
            <span className="text">
              <p>12k followers</p>
              <div className="d-flex justify-content-start">
                <p className="pr-1">{`${timestamp}m`}</p>
                <p className="pr-1">Edited </p>
                <p>
                  <i className="fas fa-circle pr-1"></i>
                </p>
                <p>
                  <i className="fas fa-globe-europe"></i>
                </p>
              </div>
            </span>
          </div>
          {userId === "60c70adc291930001560ab93" && <i className="fas fa-ellipsis-h ml-auto" onClick={handleShow}></i>}
        </div>
        <div className="post">
          <div>
            {!readMore && postInfo.text.length > 200 ? `${postInfo.text.substring(0, 200)}...` : postInfo.text}
            {postInfo.text.length > 200 && (
              <div className="read-more-div">
                <button className="read-more" onClick={() => setReadMore(!readMore)}>
                  {readMore ? "show less" : "  read more"}
                </button>
              </div>
            )}
          </div>
          {postInfo.image && <img className="w-100" src={postInfo.image} alt="post" />}
          <hr />
          <div className="mt-3 d-flex justify-content-between">
            <div className="reactions">
              <i className="far fa-thumbs-up"> Like</i>
            </div>
            <div className="reactions">
              <i className="far fa-comments "> Comment</i>
            </div>
            <div className="reactions">
              <i className="fas fa-share "> Share</i>
            </div>
            <div className="reactions">
              <i className="fas fa-paper-plane "> Send</i>
            </div>
          </div>
        </div>
      </div>
      <EditPostModal show={show} onHide={handleClose} postInfo={postInfo} onUpdate={onUpdate} onDelete={handleDelete} />
    </>
  )
}

export default SinglePost
