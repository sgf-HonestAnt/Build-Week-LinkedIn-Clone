import { Row, Col } from "react-bootstrap"
import { withRouter } from "react-router-dom"

import AddToYourFeed from "../FeedPage/rightSidebar/AddToYourFeed"
import MostViewedCourses from "../FeedPage/rightSidebar/MostViewedCourses"

import SinglePost from "../SinglePost/SinglePost"

import MyProfileCard from "../FeedPage/leftSidebar/MyProfileCard"
import { useState } from "react"
import { useEffect } from "react"
import { getPostById } from "../assets/fetch"

const PostPage = props => {
  const postId = props.match.params.postId

  const [post, setPost] = useState(null)

  useEffect(() => {
    getPostById(postId, setPost)
  }, [postId])

  return (
    <Row>
      <Col xs={4} md={3}>
        <div className="section-card p-0">
          <MyProfileCard />
        </div>
      </Col>
      <Col xs={8} md={5}>
        {post && <SinglePost postInfo={post} />}
      </Col>
      <Col className="d-none d-md-block" md={4}>
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

export default withRouter(PostPage)
