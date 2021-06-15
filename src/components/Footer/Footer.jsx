import { Container, Row, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import Logo from "../assets/LinkedIn-Logos/LI-Logo.png"

import "./Footer.css";

const Footer = () => {
    return (
        <Container>
            <Row className="footer py-2 px-3 px-sm-1 px-lg-auto">
                <Col xs={12} className="p-0">
                    <img className="logo" src={Logo} alt="LinkedIn" />
                </Col>
                <Col xs={12} sm={6} lg={2} className="p-0">
                    <Button variant="link">About</Button>
                    <Button variant="link">Community Guidelines</Button>
                    <DropdownButton
                    drop="up" 
                    variant="link" 
                    title="Privacy &amp; Terms">
                        <Dropdown.Item href="#">Privacy Policy</Dropdown.Item>
                        <Dropdown.Item href="#">User Agreement</Dropdown.Item>
                        <Dropdown.Item href="#">Cookie Policy</Dropdown.Item>
                        <Dropdown.Item href="#">Copyright Policy</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="link">Sales Solutions</Button>
                    <Button variant="link">Safety Center</Button>
                </Col>
                <Col xs={12} sm={6} lg={2} className="p-0">
                    <Button variant="link">Accessibility</Button>
                    <Button variant="link">Careers</Button>
                    <Button variant="link">Ad Choices</Button>
                    <Button variant="link">Mobile</Button>
                </Col>
                <Col xs={12} sm={6} lg={2} className="p-0">
                    <Button variant="link">Talent Solutions</Button>
                    <Button variant="link">Marketing Solutions</Button>
                    <Button variant="link">Advertising</Button>
                    <Button variant="link">Small Business</Button>
                </Col>
                <Col xs={12} sm={6} lg={2} className="p-0">
                    <Button variant="link"><i className="fas fa-question-circle"></i>Questions?</Button>Visit our Help center.
                    <Button variant="link"><i className="fas fa-cog"></i>Manage your account and privacy</Button>Go to your Settings.
                </Col>
                <Col xs={12} lg={4} className="dropup-language p-0">
                    Select Language
                    <DropdownButton 
                    title="English (English)" 
                    variant="link" 
                    drop="up">
                        <Dropdown.Item href="#">Dansk (Danish)</Dropdown.Item>
                        <Dropdown.Item href="#" active>English (English)</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col xs={12} className="p-0 copyright">
                <Button variant="link">LinkedIn Corporation © 2021</Button>
                </Col>                 
            </Row>
        </Container>
    )
}

export default Footer