import { useState, useEffect } from "react"
import { getProfiles } from "../../assets/fetch"
import SingleAdd from "../rightSidebar/SingleAdd"
import { MY_ID } from "../../assets/fetch"
import "./AddToYourFeed.css"

const AddToYourFeed = ({id}) => {
  const [peopleToFollow, setpeopleToFollow] = useState([])
  useEffect(() => getProfiles(setpeopleToFollow), []) // filter out person with id === MY_ID

  return (
    <section className="add-to-feed">
      <div className="d-flex justify-content-between mb-2">
        <h6>Add to your feed</h6>
        <i className="fas fa-info-circle"></i>
      </div>
      <div>
        <p className="font-weight-bold">People also viewed</p>
        {peopleToFollow.filter(users => users._id !== id).slice(0, 4).map(person => (
          <SingleAdd key={person._id} person={person} />
        ))}
      </div>
      <div className="view-recc">
        View all recommendations <i className="fas fa-arrow-right"></i>
      </div>
    </section>
  )
}

export default AddToYourFeed
