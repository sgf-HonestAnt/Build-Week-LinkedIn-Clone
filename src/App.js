import "./App.css"

import { Container } from "react-bootstrap"
import SectionCard from "./components/SectionCard/SectionCard"
import HeroSection from "./components/HeroSection/HeroSection"
import DashboardSection from "./components/DashboardSection/DashboardSection"
import AboutSection from "./components/AboutSection/AboutSection"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      {/* Navbar here */}
      <Container className="pt-5">
        <HeroSection />
        <SectionCard><DashboardSection /></SectionCard>
        <SectionCard><AboutSection /></SectionCard>
        {/* Footer is inside main container but underneath section columns */}
        <Footer />
      </Container>
    </div>
  )
}

export default App
