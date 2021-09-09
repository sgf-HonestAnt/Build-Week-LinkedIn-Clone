import React from "react"
import { Alert } from "react-bootstrap"
import "./singlepost.css"
import { useState } from "react"
import { Link, withRouter } from "react-router-dom"
import EditPostModal from "./EditPostModal"

const SinglePost = ({ postInfo, onUpdate, userData }) => {
  const [readMore, setReadMore] = useState(false)
  const [wasDeleted, setWasDeleted] = useState(false)

  // Modal stuff
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const currentDate = new Date()
  const timestamp = currentDate.getMinutes()
  const handleDelete = () => setWasDeleted(true)
  const userLink = `/profile/${postInfo.user._id}`
  
  if (wasDeleted)
  return (
    <Alert variant="info" className="my-3">
        Deleting... Stay with me...
      </Alert>
  )
  
  const postString = postInfo.createdAt 
  const viewString = new Date().toISOString()

  const a = new Date("2021-09-08T12:59:12.846Z")
  const b = new Date("2021-09-09T06:33:18.952Z")
  
  console.log("1",postString,"2",viewString)
  console.log("a",a,"a.year",a.getFullYear(),"a.month",a.getMonth(),"a.date",a.getDate())
  console.log("b",b,"b.year",b.getFullYear(),"b.month",b.getMonth(),"b.date",b.getDate())


  return (
    <>
      <div className="section-card p-3">
        <div className="d-flex mb-2 single-post">
        <Link to={userLink}><img src={userData?.image || "https://via.placeholder.com/150"} alt="" className="user-picture" /></Link>
          <div className="ml-3">
            <p><Link to={userLink}>{postInfo.username}</Link></p>
            <span className="text">
              <p>12k followers</p>
              <div className="d-flex justify-content-start">
                <p className="pr-1">{`${timestamp}m`}</p>
                {postInfo.createdAt !== postInfo.updatedAt && <p className="pr-1">Edited</p>}
                <p>
                  {/* <i className="fas fa-circle pr-1"></i> */}
                </p>
                <p>
                  <i className="fas fa-globe-europe"></i>
                </p>
              </div>
            </span>
          </div>
          {userData?._id === "60c70adc291930001560ab93" && <i className="fas fa-ellipsis-h ml-auto" onClick={handleShow}></i>}
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
