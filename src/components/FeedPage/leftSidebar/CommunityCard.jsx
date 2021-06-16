import "./CommunityCard.css"

const CommunityCard = () => {
  return (
    <section className="community-card">
      <div>
        <h5>Recent</h5>
        <p>
          <i className="fas fa-chalkboard-teacher"></i>
          Webinar
        </p>
        <p>
          <i className="fas fa-users"></i>
          Strive Alumni
        </p>
      </div>
      <div>
        <h5>Groups</h5>
        <p>
          <i className="fas fa-users"></i>
          React Pros
        </p>
        <p>
          <i className="fas fa-users"></i>
          Stivers
        </p>
      </div>
      <div>
        <h5>Events</h5>
        <p>
          <i className="fas fa-chalkboard-teacher"></i>
          Webinar
        </p>
        <p className="mb-0">
          <i className="fas fa-chalkboard-teacher"></i>
          Workshop
        </p>
      </div>
    </section>
  )
}

export default CommunityCard
