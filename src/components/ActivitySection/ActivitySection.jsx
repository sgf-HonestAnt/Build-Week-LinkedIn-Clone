import ActivityItem from "./ActivityItem"

import "./ActivitySection.css"

const ActivitySection = ({ userPosts, currentUserId }) => {
  const filterArray = () => {
    const userId = currentUserId === "me" ? "60c70adc291930001560ab93" : currentUserId
    const filteredArr = userPosts?.filter(post => post?.user?._id === userId)
    return filteredArr.map(post => <ActivityItem key={post._id} post={post} />).slice(0,6)
  }

  return (
    <section>
      <h5>Activity</h5>
      {userPosts && <div className="activity-section d-flex flex-wrap">{filterArray()}</div>}
    </section>
  )
}

export default ActivitySection
