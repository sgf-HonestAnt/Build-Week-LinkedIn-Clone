import "./App.css"

import { Container } from "react-bootstrap"
import { Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import ProfilePage from "./components/ProfilePage/ProfilePage"
import Footer from "./components/Footer/Footer"
import FeedPage from "./components/FeedPage/FeedPage"
import PostPage from "./components/PostPage/PostPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container fluid className="pt-5 main">
        <Route exact path="/" component={FeedPage} />

        <Route path="/post/:postId">
          <PostPage />
          <Footer />
        </Route>

        <Route path="/profile/:userId">
          <ProfilePage />
          <Footer />
        </Route>
      </Container>
    </div>
  )
}

export default App
