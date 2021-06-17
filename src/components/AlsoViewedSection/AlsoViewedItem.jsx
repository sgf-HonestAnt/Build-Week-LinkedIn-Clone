import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const AlsoViewedItem = ({ profileInfo }) => {
  return (
    <div className="d-flex flex-column align-items-center w-100 mb-3">
      <Link className="w-100" to={`/profile/${profileInfo._id}`}>
        <div className="d-flex align-items-start w-100 ">
          <img src={profileInfo.image} alt="" width="50px" className="mr-2 rounded-circle" />
          <div>
            <div className="d-flex">
              <p className="font-weight-bold m-0">{profileInfo.name + " " + profileInfo.surname}</p>
              <i className="fas fa-circle font-grey"></i>
              <p className="m-0 font-grey">2nd</p>
            </div>
            <p className="m-0">{profileInfo.title}</p>
          </div>
        </div>
      </Link>
      <Button variant="outline-secondary" className="rounded-pill py-1 mt-1">
        Connect
      </Button>
    </div>
  )
}

export default AlsoViewedItem
