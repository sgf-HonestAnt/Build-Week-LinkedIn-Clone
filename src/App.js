import "./App.css"

import { Container } from "react-bootstrap"
import SectionCard from "./components/SectionCard/SectionCard"
import FeaturedRow from "./components/Featured/FeaturedRow"
import EducationRow from "./components/Education/EducationRow"
import ExperienceRow from "./components/Experience/ExperienceRow"

function App() {
  return (
    <div className="App">
      {/* Navbar here */}
      <Container className="pt-5">
        <SectionCard>{/* hero comp */}</SectionCard>
        <SectionCard>{/* about comp */}</SectionCard>
        <SectionCard><FeaturedRow/></SectionCard>
        <SectionCard><EducationRow/></SectionCard>
        <SectionCard><ExperienceRow/></SectionCard>
      </Container>
    </div>
  )
}

export default App
