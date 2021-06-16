import { Row, Col } from "react-bootstrap"

import ActivitySection from "../ActivitySection/ActivitySection"
import AlsoViewed from "../AlsoViewedSection/AlsoViewedSection"
import HeroSection from "../HeroSection/HeroSection"
// import DashboardSection from "../DashboardSection/DashboardSection"
import AboutSection from "../AboutSection/AboutSection"
import FeaturedRow from "../Featured/FeaturedRow"
import EducationRow from "../Education/EducationRow"
import ExperienceRow from "../Experience/ExperienceRow"
import { useState } from "react"
import { useEffect } from "react"
import { getExperiencesById, getPosts, getProfileById } from "../assets/fetch"

const MyProfile = props => {
  const [profileData, setProfileData] = useState({})
  const [experiences, setExperiences] = useState([])
  const [posts, setPosts] = useState(null)
  const [isRefreshed, setIsRefreshed] = useState(false)

  useEffect(() => {
    getProfileById("me", setProfileData)
    getExperiencesById("60c70adc291930001560ab93", setExperiences)
    getPosts(setPosts)
    setIsRefreshed(false)
  }, [isRefreshed])

  const refresh = () => {
    setIsRefreshed(true)
  }

  return (
    <Row className="align-items-start">
      <Col className="my-3 px-1" xs={12} md={9}>
        <div className="section-card p-0">
          <HeroSection profileData={profileData} />
        </div>
        <div className="section-card p-3">
          <AboutSection />
        </div>
        <div className="section-card p-3">
          <FeaturedRow />
        </div>
        <div className="section-card p-3">
          <ActivitySection userPosts={posts} />
        </div>
        <div className="section-card p-3">
          <ExperienceRow experiencesData={experiences} onUpdate={refresh} />
        </div>
        <div className="section-card p-3">
          <EducationRow />
        </div>
      </Col>
      <Col className="d-none d-md-block my-3 px-1" md={3}>
        <div className="section-card p-3">
          <AlsoViewed />
        </div>
      </Col>
    </Row>
  )
}

export default MyProfile
