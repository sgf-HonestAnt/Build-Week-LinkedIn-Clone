import "./App.css"

import { Container, Row, Col } from "react-bootstrap"

import Navbar from "./components/Navbar/Navbar"
import ActivitySection from "./components/ActivitySection/ActivitySection"
import AlsoViewed from "./components/AlsoViewedSection/AlsoViewedSection"

import HeroSectionCard from "./components/SectionCard/HeroSectionCard"
import HeroSection from "./components/HeroSection/HeroSection"
import DashboardSection from "./components/DashboardSection/DashboardSection"
import AboutSection from "./components/AboutSection/AboutSection"
import Footer from "./components/Footer/Footer"

import FeaturedRow from "./components/Featured/FeaturedRow"
import EducationRow from "./components/Education/EducationRow"
import ExperienceRow from "./components/Experience/ExperienceRow"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container fluid className="pt-5 main">
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
        {/* <Footer /> */}
      </Container>
    </div>
  )
}

export default App
