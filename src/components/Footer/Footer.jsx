import { Row, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import "./Footer.css";
import Logo from "../assets/LinkedIn-Logos/LI-Logo.png"

const Footer = () => {
    return (
        <div>
            <Row className="footer p-2">
                <Col xs={12} lg={8} className="p-0">
                    <Row className="pt-4 pb-2"><img className="logo" src={Logo} alt="LinkedIn" /></Row>
                    <Row className="p-0">
                        <Col xs={12} sm={6} lg={3} className="p-0">
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
                        <Col xs={12} sm={6} lg={3} className="p-0">
                            <Button variant="link">Talent Solutions</Button>
                            <Button variant="link">Marketing Solutions</Button>
                            <Button variant="link">Advertising</Button>
                            <Button variant="link">Small Business</Button>
                        </Col>
                        <Col sm={6} lg={4} className="p-0 d-none d-sm-block">
                            <Row className="pb-3">
                                <Col xs={2} className="pr-0"><i class="fas fa-question-circle"></i></Col>
                                <Col xs={10} className="p-0">
                                    <Button variant="link">Questions?</Button>
                                    Visit our Help center.
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={2} className="pr-0"><i class="fas fa-cog"></i></Col>
                                <Col xs={10} className="p-0">
                                    <Button variant="link">Manage your account and privacy</Button>
                                    Go to your Settings.
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="pt-2 copyright">
                        <Button variant="link">LinkedIn Corporation © 2021</Button>
                    </Row>
                </Col>
                <Col xs={12} lg={4} className="p-5 dropup-language">
                    Select Language
                    <DropdownButton 
                    title="English (English)" 
                    variant="link" 
                    drop="up">
                        <Dropdown.Item href="#">Dansk (Danish)</Dropdown.Item>
                        <Dropdown.Item href="#" active>English (English)</Dropdown.Item>
                    </DropdownButton>
                </Col>                    
            </Row>
        </div>
    )
}

export default Footer