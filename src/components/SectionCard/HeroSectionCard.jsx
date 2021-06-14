import { Row, Col } from "react-bootstrap"
import "./HeroSectionCard.css"

const SectionCard = props => {
  return (
      <Col xs={12} md={9} className="section-card py-0">
        {props.children}
      </Col>
  )
}

export default SectionCard
