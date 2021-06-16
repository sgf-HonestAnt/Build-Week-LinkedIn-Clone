import { Button } from "react-bootstrap"

import "./AboutSection.css"

const AboutSection = ({ profileData, isMe }) => {
  return (
    <section className="about-section">
      <div className="d-flex justify-content-between">
        <h5>About</h5>
        {isMe && (
          <button className="editBtn">
            <i className="fas fa-pencil-alt"></i>
          </button>
        )}
      </div>
      <div>
        <p>
          {profileData.bio}
          <Button variant="link" className="see-more-btn">
            ...see more
          </Button>
        </p>
      </div>
    </section>
  )
}

export default AboutSection
