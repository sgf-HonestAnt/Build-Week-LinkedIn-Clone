import { Button } from "react-bootstrap"

import "./AboutSection.css"

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="d-flex justify-content-between">
        <h5 className="pb-2">About</h5>
        <i className="fas fa-pencil-alt mt-4 mr-4"></i>
      </div>
      <div>
        <p>
          Hi, I'm a Strive Student with an interest in programming. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          molestiae quasi animi eaque tempora ipsam ratione, quas magni a perspiciatis laboriosam harum explicabo mollitia! Quaerat cum
          voluptatibus.
          <Button variant="link">...see more</Button>
        </p>
      </div>
    </section>
  )
}

export default AboutSection
