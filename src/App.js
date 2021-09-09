import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Footer from "./components/Footer/Footer";
import FeedPage from "./components/FeedPage/FeedPage";
import PostPage from "./components/PostPage/PostPage";
import Notifications from "./components/Notifications/Notifications";
import Loggin from "./components/Loggin/Loggin";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Switch>
          <Route 
          exact path="/" 
          render={(routeProps) => <Loggin {...routeProps} /> }
          />
          <div>
            <Container fluid className="pt-5 main" style={{ minHeight: "100vh" }}>
            <Navbar />
            <Route exact path="/home" component={FeedPage} />
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
