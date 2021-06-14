import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import "./HeroSection.css";
import Logo from "../assets/LinkedIn-Logos/LI-Logo.png";

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="hero-cover p-relative">
                <Card.Img variant="top" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F1-office-1516329_1920-1200x299.jpg" />
                <i className="fas fa-pen-square"></i>
                <img className="profile-pic img-fluid" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>                
            <i className="fas fa-pencil-alt pt-4 pr-4"></i>                
            <div className="hero-columns pt-5">
                <div className="mr-5">
                    <Card.Body>
                        <Card.Title className="mb-0 profile-name">Strive Student</Card.Title>
                        <Card.Text>Full Stack Developer
                        <br />Berlin, Germany • <Button variant="link">Contact info</Button>
                        <br /><Button variant="link">500+ connections</Button></Card.Text>
                        <Card.Text>
                            <Badge pill variant="primary">Open to</Badge>
                            <Badge pill variant="light">Add section</Badge>
                            <Badge pill variant="light">More</Badge>
                        </Card.Text>
                    </Card.Body>
                </div>
                <div className="work-history">
                    <div className="mb-2"><img src={Logo} alt="..." />Lorem</div>
                    <div className="mb-2"><img src={Logo} alt="..." />Lorem</div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection