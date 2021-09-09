import "./App.css";

import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Footer from "./components/Footer/Footer";
import FeedPage from "./components/FeedPage/FeedPage";
import PostPage from "./components/PostPage/PostPage";
import Notifications from "./components/Notifications/Notifications";
import Loggin from "./components/Loggin/Loggin";
import SignUpForm from "./components/signUp/SignUpForm";
function App() {
  return (
    <div className="App">
      <Container fluid className="pt-5 main" style={{ minHeight: "100vh" }}>
        <Route exact path="/" component={FeedPage} />
        <Route exact component={Loggin} path="/loggin"></Route>
        <Route path="/signup" exact render={(routerProps) => <SignUpForm  {...routerProps}></SignUpForm>}></Route>
        <Navbar />
        <Route
          path="/post/:postId"
          render={(routeProps) => (

            <>
              <PostPage {...routeProps} />
              <Footer />
            </>
          )}
        ></Route>

        <Route
          path="/profile/:userId"
          render={(routeProps) => (
            <>
              <ProfilePage {...routeProps} />
              <Footer />
            </>
          )}
        ></Route>

        <Route
          path="/notifications"
          render={(routeProps) => (
            <>
              <Notifications {...routeProps} />
            </>
          )}
        ></Route>
      </Container>
    </div>
  );
}

export default App;
