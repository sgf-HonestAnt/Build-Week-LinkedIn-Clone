import { useState } from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <nav className="fixed-top top-navbar d-flex">
      <Container className="d-flex align-items-center">
        <Link to="/feed">
          <i className="fab fa-linkedin mr-2"></i>
        </Link>
        {/* <div className="d-flex flex-column align-items-center d-md-none search-container-small">
          <i className="fas fa-search mx-3"></i>
          <span className="d-none d-sm-block">Search</span>
        </div> */}
        <div className="p-1 d-flex align-items-center rounded search-container-big">
          <div>
            <i className="fas fa-search mx-3"></i>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.currentTarget.value.toLowerCase())}
          ></input>
        </div>
        <ul className="d-flex justify-content-around align-items-center w-100 h-100">
          <li>
            <Link to="/feed">
              <i className="fas fa-home"></i>
              <span className="d-none d-sm-block">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/mynetwork">
              <i className="fas fa-user-friends"></i>
              <span className="d-none d-sm-block">Network</span>
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              <i className="fas fa-briefcase"></i>
              <span className="d-none d-sm-block">Jobs</span>
            </Link>
          </li>
          <li>
            <Link to="/messaging">
              <i className="fas fa-comment-dots"></i>
              <span className="d-none d-sm-block pr-1">Messaging</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications">
              <i className="fas fa-bell"></i>
              <span className="d-none d-sm-block pl-1">Notifications</span>
            </Link>
          </li>
          <li>
            <Link to="/me">
              <i class="fas fa-user-circle"></i>
              <span className="d-none d-sm-block">Me</span>
            </Link>
          </li>
          <li className="border-left">
            <Link to="/work">
              <i className="fas fa-th"></i>
              <span className="d-none d-sm-block">Work</span>
            </Link>
          </li>
          <li id="premium" className="d-none d-md-flex">
            <a href="https://www.linkedin.com/premium/products/" target="_blank" rel="noreferrer">
              <span className="text-center">Try Premium Free for 1 month</span>
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar
