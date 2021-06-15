import { Row, Col, Button } from 'react-bootstrap';

import "./AboutSection.css"

const AboutSection = () => {
    return (
        <div className="about">
            <div>
            <i className="fas fa-pencil-alt"></i>
            <h5 className="pb-2">About</h5>
            <p>Hi, I'm a Strive Student with an interest in programming. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae quasi animi eaque tempora ipsam ratione, quas magni a perspiciatis laboriosam harum explicabo mollitia! Quaerat cum voluptatibus.
            <Button variant="link">...see more</Button></p>
            </div>
        </div>
    )
}

export default AboutSection