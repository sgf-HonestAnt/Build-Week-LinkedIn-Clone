import "./App.css"

import { Container } from "react-bootstrap"
import { Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import ProfilePage from "./components/ProfilePage/ProfilePage"
import Footer from "./components/Footer/Footer"
import FeedPage from "./components/FeedPage/FeedPage"
import PostPage from "./components/PostPage/PostPage"
import Notifications from "./components/Notifications/Notifications"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container fluid className="pt-5 main">
        <Route exact path="/" component={FeedPage} />

        <Route
          path="/post/:postId"
          render={routeProps => (
            <>
              <PostPage {...routeProps} />
              <Footer />
            </>
          )}
        ></Route>

        <Route
          path="/profile/:userId"
          render={routeProps => (
            <>
              <ProfilePage {...routeProps} />
              <Footer />
            </>
          )}
        ></Route>

        <Route
          path="/notifications" 
          render={routeProps => (
            <>
              <Notifications {...routeProps} />
            </>
          )}
        ></Route>
      </Container>
    </div>
  )
}

export default App
