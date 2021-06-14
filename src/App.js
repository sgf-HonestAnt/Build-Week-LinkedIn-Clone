import "./App.css"


import { Container, Row, Col } from "react-bootstrap"

import SectionCard from "./components/SectionCard/SectionCard"
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
          <Col className="section-card py-2 my-3" xs={12} md={9}>
           
          </Col>
          <Col className="d-none d-md-block section-card py-2 my-3" xs={0} md={3}>
           
          </Col>
        </Row>
      <Container className="pt-5">

      </Container>
    </div>
  )
}

export default App
