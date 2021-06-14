const ActivityItem = () => {
  return (
    <div className="activity-item d-flex align-items-start my-2 px-1">
      <img src="https://via.placeholder.com/150" alt="" width="50px" className="mr-2" />
      <div>
        <p className="title font-weight-bold m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse delectus doloremque </p>
        <p className="mt-2 mb-0">Strive Student shared this</p>
        <div className="d-flex align-items-center font-grey">
          <p className="m-0">21 Reactions</p>
          <i className="fas fa-circle"></i>
          <p className="m-0">2 Comments</p>
        </div>
      </div>
    </div>
  )
}

export default ActivityItem
