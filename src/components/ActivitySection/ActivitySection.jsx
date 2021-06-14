import ActivityItem from "./ActivityItem"

import "./ActivitySection.css"

const ActivitySection = () => {
  return (
    <section>
      <h5>Activity</h5>
      <div className="activity-section d-flex flex-wrap">
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
      </div>
    </section>
  )
}

export default ActivitySection
