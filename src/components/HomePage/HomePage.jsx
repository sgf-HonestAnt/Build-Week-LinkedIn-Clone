import { Row, Col } from "react-bootstrap"

import ActivitySection from "../ActivitySection/ActivitySection"
import AlsoViewed from "../AlsoViewedSection/AlsoViewedSection"
import HeroSection from "../HeroSection/HeroSection"
import DashboardSection from "../DashboardSection/DashboardSection"
import AboutSection from "../AboutSection/AboutSection"
import FeaturedRow from "../Featured/FeaturedRow"
import EducationRow from "../Education/EducationRow"
import ExperienceRow from "../Experience/ExperienceRow"

const HomePage = () => {
  return (
    <Row className="align-items-start">
      <Col className="my-3 px-1" xs={12} md={9}>
        <div className="section-card px-3">
          <HeroSection />
        </div>
        <div className="section-card p-3">
          <AboutSection />
        </div>
        <div className="section-card p-3">
          <FeaturedRow />
        </div>
        <div className="section-card p-3">
          <ActivitySection />
        </div>
        <div className="section-card p-3">
          <ExperienceRow />
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

export default HomePage
