import React from "react"
import SinglePost from "./SinglePost"
import "./singlepost.css"

const UserPostSection = ({ id, posts, onUpdate }) => {
  return (
    <section className="user-posts-section">
      {posts
        .slice(posts.length - 20)
        .reverse()
        .map(post => {
          return <SinglePost key={post._id} postInfo={post} userData={post.user} onUpdate={onUpdate} />
        })}
    </section>
  )
}

export default UserPostSection
