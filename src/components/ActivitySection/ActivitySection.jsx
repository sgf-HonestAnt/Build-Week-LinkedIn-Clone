import { Row, Col } from "react-bootstrap"
import ActivityItem from "./ActivityItem"

import "./ActivitySection.css"

const ActivitySection = () => {
  return (
    <div>
      <h3>Activity</h3>
      <section className="activity-section d-flex flex-wrap">
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
      </section>
    </div>
  )
}

export default ActivitySection
