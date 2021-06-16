import "./App.css"

import { Container } from "react-bootstrap"
import { Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import MyProfile from "./components/MyProfile/MyProfile"
import GenericProfile from "./components/GenericProfile/GenericProfile"
import Footer from "./components/Footer/Footer"
import FeedPage from "./components/FeedPage/FeedPage"
import PostPage from "./components/PostPage/PostPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container fluid className="pt-5 main">
        <Route exact path="/" component={FeedPage} />
        <Route exact path="/me">
          <MyProfile />
          <Footer />
        </Route>

        <Route path="/post/:postId">
          <PostPage />
          <Footer />
        </Route>

        <Route path="/profile/:userId">
          <GenericProfile />
          <Footer />
        </Route>
      </Container>
    </div>
  )
}

export default App
