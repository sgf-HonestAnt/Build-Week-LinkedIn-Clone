import { Row, Col } from "react-bootstrap";
import SinglePost from "../SinglePost/SinglePost";
import UserPostSection from "../SinglePost/UserPostSection";

const FeedPage = () => {
  return (
    <Row>
      <Col xs={4} md={3}>
        <div style={{ height: "200px", backgroundColor: "white" }}></div>
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
