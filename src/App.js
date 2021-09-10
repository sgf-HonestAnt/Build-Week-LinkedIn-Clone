import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Footer from "./components/Footer/Footer";
import FeedPage from "./components/FeedPage/FeedPage";
import PostPage from "./components/PostPage/PostPage";
import Notifications from "./components/Notifications/Notifications";
import Loggin from "./components/Loggin/Loggin";
import {
  getLoggedUser,
  getProfileById,
  MY_ID,
} from "./components/assets/fetch";

import SignUpForm from "./components/signUp/SignUpForm";
function App() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const id = window.localStorage.getItem("my_id");
    setUserId(id);
    console.log("=============APP", id);
  }, []);

  // console.log("HIIIII", userId);

  return (
    <div className="App">
      {/* <BrowserRouter basename="/"> */}
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => <Loggin {...routerProps} />}
          />
          <div>
            <Container
              fluid
              className="pt-5 main"
              style={{ minHeight: "100vh" }}
            >
              <Navbar />
              <Route
                exact
                path="/home"
                render={(props) => <FeedPage id={userId} />}
              />
              <Route
                eaxct
                path="/post/:postId"
                render={(routerProps) => (
                  <>
                    <PostPage {...routerProps} />
                    <Footer />
                  </>
                )}
              ></Route>
              <Route
                exct
                path="/profile/:userId"
                render={(routerProps) => (
                  <>
                    <ProfilePage {...routerProps} />
                    <Footer />
                  </>
                )}
              ></Route>
              <Route
                exact
                path="/notifications"
                render={(routerProps) => (
                  <>
                    <Notifications {...routerProps} />
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
