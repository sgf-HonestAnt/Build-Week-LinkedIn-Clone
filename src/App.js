import "./App.css"
import { Container, Row } from "react-bootstrap"
import SectionCard from "./components/SectionCard/SectionCard"
import HeroSectionCard from "./components/SectionCard/HeroSectionCard"
import HeroSection from "./components/HeroSection/HeroSection"
import DashboardSection from "./components/DashboardSection/DashboardSection"
import AboutSection from "./components/AboutSection/AboutSection"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      {/* Navbar here */}
      <Container className="pt-5">
        <Row className="my-3">
          <HeroSectionCard><HeroSection /></HeroSectionCard>
        </Row>
        <Row className="my-3">
          <SectionCard><DashboardSection /></SectionCard>
        </Row>
        <Row className="my-3">
          <SectionCard><AboutSection /></SectionCard>
        </Row>
        <Footer />
      </Container>
    </div>
  )
}

export default App
