import "./MostViewedCourses.css"

const MostViewedCourses = () => {
  return (
    <section className="most-viewed-courses">
      <div className="d-flex justify-content-between mb-2">
        <h6>Today's most viewed courses</h6>
        <i className="fas fa-info-circle"></i>
      </div>
      <div>
        <ol className="ordered-list">
          <li>
            <strong>The Six Morning Habits of High Performance</strong>
            <br />
            Pete Mockaitis | How To Be Awesome At Your...
          </li>
          <li>
            <strong>Unconscious Bias</strong>
            <br />
            Stacey Gordon
          </li>
          <li>
            <strong>What is Graphic Design?</strong>
            <br />
            Sean Adams
          </li>
        </ol>
      </div>
      <div>
        <div className="view-recc">
          View all recommendations <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </section>
  )
}

export default MostViewedCourses
