import { Button } from "react-bootstrap"

const AlsoViewedItem = ({ profileInfo }) => {
  return (
    <div className="d-flex flex-column mb-3">
      <div className="d-flex align-items-start">
        <img src={profileInfo.image} alt="" width="50px" className="mr-2 rounded-circle" />
        <div>
          <div className="d-flex align-items-center">
            <p className="font-weight-bold m-0">{profileInfo.name + " " + profileInfo.surname}</p>
            <i className="fas fa-circle font-grey"></i>
            <p className="m-0 font-grey">2nd</p>
          </div>
          <p className="m-0">{profileInfo.title}</p>
          <Button variant="outline-secondary" className="rounded-pill py-1 mt-2">
            Connect
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AlsoViewedItem
