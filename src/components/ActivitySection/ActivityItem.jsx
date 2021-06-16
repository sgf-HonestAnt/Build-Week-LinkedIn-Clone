import { Link } from "react-router-dom"

const ActivityItem = ({ post }) => {
  return (
    <Link to={`/post/${post._id}`}>
      <div className="activity-item d-flex align-items-start my-2 px-1">
        <img src={post.image || "https://strive.school/favicon.ico"} alt="post" width="50px" className="mr-2" />
        <div>
          <p className="title font-weight-bold m-0">{post.text}</p>
          <p className="mt-2 mb-0">{post.username} shared this</p>
          <div className="d-flex align-items-center font-grey">
            <p className="m-0">21 Reactions</p>
            <i className="fas fa-circle"></i>
            <p className="m-0">2 Comments</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ActivityItem
