import "./App.css"

import { Container } from "react-bootstrap"
import { Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import MyProfile from "./components/MyProfile/MyProfile"
import GenericProfile from "./components/GenericProfile/GenericProfile"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container fluid className="pt-5 main">
        <Route exact path="/" component={MyProfile}></Route>
        <Route path="/profile/:userId" component={GenericProfile} />
      </Container>
      <Footer />
    </div>
  )
}

export default App
