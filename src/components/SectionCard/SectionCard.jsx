import { Row, Col } from "react-bootstrap"

import "./SectionCard.css"

const SectionCard = props => {
  return (
    <Row className="section-card p-3 my-3">
      <Col xs={12} md={9}>
        {props.children}
      </Col>
    </Row>
  )
}

export default SectionCard
