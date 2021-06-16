import { Row, Col } from "react-bootstrap"

const FeedPage = () => {
  return (
    <Row>
      <Col xs={4} md={3}>
        <div style={{ height: "200px", backgroundColor: "white" }}></div>
      </Col>
      <Col xs={8} md={5}>
        <div style={{ height: "200px", backgroundColor: "white" }}></div>
      </Col>
      <Col className="d-none d-md-block" md={4}>
        <div style={{ height: "200px", backgroundColor: "white" }}></div>
      </Col>
    </Row>
  )
}

export default FeedPage
