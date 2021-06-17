import React from "react"
import { getPosts } from "../assets/fetch"
import { useEffect } from "react"
import { useState } from "react"
import SinglePost from "./SinglePost"
import "./singlepost.css"

const UserPostSection = () => {
  const [posts, setPosts] = useState([])
  const [wasUpdated, setWasUpdated] = useState(false)

  const handleUpdate = () => {
    setWasUpdated(true)
  }

  useEffect(() => {
    getPosts(setPosts)
    setWasUpdated(false)
  }, [wasUpdated])

  return (
    <section className="user-posts-section">
      {posts.slice(posts.length - 20).map(post => {
        return <SinglePost key={post._id} postInfo={post} onUpdate={handleUpdate} />
      })}
    </section>
  )
}

export default UserPostSection
