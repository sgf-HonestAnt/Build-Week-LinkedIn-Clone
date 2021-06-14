import "./App.css"

import { Container } from "react-bootstrap"
import SectionCard from "./components/SectionCard/SectionCard"

function App() {
  return (
    <div className="App">
      {/* Navbar here */}
      <Container className="pt-5">
        <SectionCard>{/* hero comp */}</SectionCard>
        <SectionCard>{/* about comp */}</SectionCard>
      </Container>
    </div>
  )
}

export default App
