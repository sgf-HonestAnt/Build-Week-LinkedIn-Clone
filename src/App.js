import "./App.css"

import { Container, Row, Col } from "react-bootstrap"
import SectionCard from "./components/SectionCard/SectionCard"
import Navbar from "./components/Navbar/Navbar"
import ActivitySection from "./components/ActivitySection/ActivitySection"
import AlsoViewed from "./components/AlsoViewedSection/AlsoViewedSection"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container fluid className="pt-5 main">
        <Row className="align-items-start">
          <Col className="section-card py-2 my-3" xs={12} md={9}>
            <ActivitySection />
          </Col>
          <Col className="d-none d-md-block section-card py-2 my-3" xs={0} md={3}>
            <AlsoViewed />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
