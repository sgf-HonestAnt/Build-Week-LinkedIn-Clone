import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import "./HeroSection.css";
import Logo from "../assets/LinkedIn-Logos/LI-Logo.png";

const HeroSection = () => {
    return (
        <Row className="hero">
            <Col xs={12} className="p-0">
                <div className="p-relative">
                <Card.Img variant="top" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F1-office-1516329_1920-1200x299.jpg" />
                <i className="fas fa-pen-square"></i>
                <img className="profile-pic img-fluid" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />{/* On the api, this will probably our profile .image */}
                </div>
                <i className="fas fa-pencil-alt pt-4 pr-4"></i>
                <Row>
                    <Col xs={8}>
                        <Card.Body className="pt-5">
                            <Card.Title className="mb-0 profile-name">Strive Student</Card.Title>{/* .name */}
                            <Card.Text>Full Stack Developer{/* .title*/}
                            <br />Berlin, Germany • <Button variant="link">Contact info</Button></Card.Text>{/* .area, contact link */}
                            <Card.Text><Button variant="link">500+ connections</Button></Card.Text>
                            <Card.Text>
                                <Badge pill variant="primary">Open to</Badge>
                                <Badge pill variant="light">Add section</Badge>
                                <Badge pill variant="light">More</Badge>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col xs={4} className="pt-2 mt-5 pr-3 work-history">
                        <Row>
                            <Col xs={3} className="p-0 text-right">
                                <img src={Logo} alt="..." />
                            </Col>
                            <Col xs={9} className="pr-1">
                                Lorem ipsum dolor sit amet.
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3} className="p-0 text-right">
                                <img src={Logo} alt="..." />
                            </Col>
                            <Col xs={9} className="pr-1">
                                Lorem ipsum dolor sit amet.
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default HeroSection