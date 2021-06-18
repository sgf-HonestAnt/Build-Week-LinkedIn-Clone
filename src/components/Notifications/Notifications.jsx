import { Row, Col } from "react-bootstrap";
import NotificationsLeft from "./NotificationsLeftSide.jsx";
import NotificationsRight from "./NotificationsRightSide.jsx";
import NotificationsCenter from "./NotificationsCenter.jsx";
import FeedPageFooter from "../FeedPage/rightSidebar/FeedPageFooter";
import "./Notifications.css";

const Notifications = () => {

  return (
    <Row>
      <Col xs={4} md={3} className="mt-2 px-1">
        <div className="notifications-section-card mt-2">
          <NotificationsLeft />
        </div>
      </Col>
      <Col xs={8} md={5} className="mt-2">

        <div className="section-card">
          <NotificationsCenter />
        </div>
      </Col>
      <Col className="d-none d-md-block mt-2 px-1" md={4}>
      <div className="notifications-right-section-card p-3 mt-2">

          <NotificationsRight />
        </div>
        <div>
          <FeedPageFooter />
        </div>
      </Col>
    </Row>
  )
}

export default Notifications
