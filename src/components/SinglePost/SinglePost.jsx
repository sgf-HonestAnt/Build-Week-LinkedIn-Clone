import React from "react";
import "./singlepost.css";
import { useState } from "react";

const SinglePost = ({ postInfo }) => {
  const [readMore, setReadMore] = useState(false);

  const currentDate = new Date();
  const timestamp = currentDate.getMinutes();
  return (
    <>
      <div className="section-card p-3">
        <div className="d-flex my-2 single-post">
          <img
            src={postInfo?.user?.image || "https://via.placeholder.com/150"}
            className="ml-3"
            alt=""
            height="56px"
          />
          <div className="ml-3">
            <p>{postInfo.username}</p>
            <span className="text">
              <p>12k followers</p>
              <p>{`${timestamp}m`}</p>
              <div className="d-flex justify-content-start">
                <p>Edited </p>
                <p>
                  <i className="fas fa-circle"></i>
                </p>
                <p>
                  <i className="fas fa-globe-europe"></i>
                </p>
              </div>
            </span>
          </div>
        </div>
        <div className="ml-3 post">
          <p>
            {readMore ? postInfo.text: postInfo.text.substring(0,200)}
            <button
              className="read-more"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "read more" : "  show less"}
            </button>
          </p>
          {postInfo.image && (
            <img
              src={postInfo.image}
              alt="post"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SinglePost;
