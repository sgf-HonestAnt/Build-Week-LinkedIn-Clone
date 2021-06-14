import { Button } from "react-bootstrap"

const AlsoViewedItem = () => {
  return (
    <div className="d-flex flex-column mb-3">
      <div className="d-flex align-items-start">
        <img src="https://via.placeholder.com/150" alt="" width="50px" className="mr-2 rounded-circle" />
        <div>
          <div className="d-flex align-items-center">
            <p className="font-weight-bold m-0">Strive Student</p>
            <i className="fas fa-circle"></i>
            <p className="m-0">2nd</p>
          </div>
          <p className="m-0">Strive School</p>
          <Button variant="outline-secondary" className="rounded-pill py-1 mt-2">
            Connect
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AlsoViewedItem
