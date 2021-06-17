import React from "react"
import "./singlepost.css"
import { useState } from "react"

const SinglePost = ({ postInfo }) => {
  const [readMore, setReadMore] = useState(false)

  const currentDate = new Date()
  const timestamp = currentDate.getMinutes()
  return (
    <>
      <div className="section-card p-3">
        <div className="d-flex mb-2 single-post">
          <img src={postInfo?.user?.image || "https://via.placeholder.com/150"} alt="" className="user-picture" />
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
        </div>
        <div className="post">
          <div>
            {readMore ? postInfo.text : `${postInfo.text.substring(0, 200)}...`}
            <div className="read-more-div">
              <button className="read-more" onClick={() => setReadMore(!readMore)}>
                {readMore ? "show less" : "  read more"}
              </button>
            </div>
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
    </>
  )
}

export default SinglePost
