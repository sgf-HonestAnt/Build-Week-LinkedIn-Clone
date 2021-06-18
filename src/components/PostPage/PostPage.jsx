import { Row, Col } from "react-bootstrap"
import AddToYourFeed from "../FeedPage/rightSidebar/AddToYourFeed"
import MostViewedCourses from "../FeedPage/rightSidebar/MostViewedCourses"
import SinglePost from "../SinglePost/SinglePost"
import MyProfileCard from "../FeedPage/leftSidebar/MyProfileCard"
import { useState } from "react"
import { useEffect } from "react"
import { getPostById, getProfileById } from "../assets/fetch"

const PostPage = props => {
  const postId = props.match.params.postId
  const [post, setPost] = useState(null)
  const [userData, setUserData] = useState({})

  const [wasUpdated, setWasUpdated] = useState(false)
  const id = post ? post.user : "me"

  useEffect(() => {
    getPostById(postId, setPost)
    setWasUpdated(false)
  }, [postId, wasUpdated])

  useEffect(() => {
    if (post) getProfileById(post.user, setUserData)
  }, [post])

  const handleUpdate = () => {
    setWasUpdated(true)
  }

  return (
    <Row>
      <Col xs={4} md={3} className="mt-2 px-1">
        <div className="section-card p-0">{id && <MyProfileCard id={id} />}</div>
      </Col>
      <Col xs={8} md={5} className="mt-2">
        {post && <SinglePost postInfo={post} userData={userData} onUpdate={handleUpdate} />}
      </Col>
      <Col className="d-none d-md-block mt-2 px-1" md={4}>
        <div className="section-card p-3">
          <AddToYourFeed />
        </div>
        <div className="section-card p-3">
          <MostViewedCourses />
        </div>
      </Col>
    </Row>
  )
}

export default PostPage
