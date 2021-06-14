import "./App.css"

import { Container } from "react-bootstrap"
import { Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import HomePage from "./components/HomePage/HomePage"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container fluid className="pt-5 main">
        <Route exact path="/" component={HomePage}></Route>
      </Container>
      {/* <Footer /> */}
    </div>
  )
}

export default App
