import ActivityItem from "./ActivityItem"

import "./ActivitySection.css"

const ActivitySection = () => {
  return (
    <section>
      <h4>Activity</h4>
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
