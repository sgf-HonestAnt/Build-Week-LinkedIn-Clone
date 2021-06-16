
import { Row, Col } from "react-bootstrap";
import SinglePost from "../SinglePost/SinglePost";
import UserPostSection from "../SinglePost/UserPostSection";

import MyProfileCard from "./leftSidebar/MyProfileCard"
import CommunityCard from "./leftSidebar/CommunityCard"

const FeedPage = () => {
  return (
    <Row>
      <Col xs={4} md={3}>
        <div className="section-card p-0">
          <MyProfileCard />
        </div>
        <div className="section-card p-3">
          <CommunityCard />
        </div>
      </Col>
      <Col xs={8} md={5}>
        <UserPostSection />
      </Col>
      <Col className="d-none d-md-block" md={4}>
        <div style={{ height: "200px", backgroundColor: "white" }}></div>
      </Col>
    </Row>
  );
};

export default FeedPage;
