import { Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import FeedPostSection from "../FeedPostSection/FeedPostSection"
import AddToYourFeed from "./rightSidebar/AddToYourFeed"
import MostViewedCourses from "./rightSidebar/MostViewedCourses"
import UserPostSection from "../SinglePost/UserPostSection"
import MyProfileCard from "./leftSidebar/MyProfileCard"
import CommunityCard from "./leftSidebar/CommunityCard"

const FeedPage = () => {
  const [isFeedRefreshed, setIsFeedRefreshed] = useState(false)

  useEffect(() => {
    setIsFeedRefreshed(false)
  }, [isFeedRefreshed])

  const refreshFeed = () => {
    setIsFeedRefreshed(true)
  }

  return (
    <Row>
      <Col xs={4} md={3}>
        <div className="section-card p-0">
          <MyProfileCard />
        </div>
        <div className="section-card p-3">
          <CommunityCard />
        </div>
      </Col>
      <Col xs={8} md={5}>
        <div className="section-card p-3">
          {/* We will need to get our profile data here and pass down to MostViewedCourses for the profile image */}
          <FeedPostSection onUpdate={refreshFeed} />
        </div>

        <UserPostSection />
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

export default FeedPage
