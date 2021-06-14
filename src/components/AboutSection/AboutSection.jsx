import { Row, Col, Button } from 'react-bootstrap';
import "./AboutSection.css"

const AboutSection = () => {
    return (
        <Row className="about">
            <Col sm={12}>
            <i class="fas fa-pencil-alt"></i>
            <h4 className="pb-2">About</h4>
            <p>Hi, I'm a Strive Student with an interest in programming. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae quasi animi eaque tempora ipsam ratione, quas magni a perspiciatis laboriosam harum explicabo mollitia! Quaerat cum voluptatibus.
            <Button variant="link">...see more</Button></p>
            </Col>
        </Row>
    )
}

export default AboutSection