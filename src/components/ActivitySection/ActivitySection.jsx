import ActivityItem from "./ActivityItem"

import "./ActivitySection.css"

const ActivitySection = ({ userPosts }) => {
  const filterArray = () => {
    const filteredArr = userPosts?.filter(post => post?.user?._id === "60c70adc291930001560ab93")
    return filteredArr.map(post => <ActivityItem key={post._id} post={post} />)
  }

  return (
    <section>
      <h5>Activity</h5>
      {userPosts && <div className="activity-section d-flex flex-wrap">{filterArray()}</div>}
    </section>
  )
}

export default ActivitySection
