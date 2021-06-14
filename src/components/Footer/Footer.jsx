import { Row, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <Row className="footer">
                <Col sm={8} className="p-0">
                    <Row className="pt-4 pb-2">Linked in logo to go here</Row>
                    <Row className="p-0">
                        <Col sm={3} className="p-0">
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
                        <Col sm={2} className="p-0">
                            <Button variant="link">Accessibility</Button>
                            <Button variant="link">Careers</Button>
                            <Button variant="link">Ad Choices</Button>
                            <Button variant="link">Mobile</Button>
                        </Col>
                        <Col sm={3} className="p-0">
                            <Button variant="link">Talent Solutions</Button>
                            <Button variant="link">Marketing Solutions</Button>
                            <Button variant="link">Advertising</Button>
                            <Button variant="link">Small Business</Button>
                        </Col>
                        <Col sm={4} className="p-0">
                            <Row className="pb-3">
                                <Col sm={2} className="pr-0"><i class="fas fa-question-circle"></i></Col>
                                <Col sm={10} className="p-0">
                                    <Button variant="link">Questions?</Button>
                                    Visit our Help center.
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2} className="pr-0"><i class="fas fa-cog"></i></Col>
                                <Col sm={10} className="p-0">
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
                <Col sm={4} className="p-5 dropup-language">
                    Select Language
                    <DropdownButton 
                    id="dropdown-item-button" 
                    title="English (English)" 
                    variant="link" 
                    drop="up">
                        <Dropdown.Item as="button">Dansk (Danish)</Dropdown.Item>
                        <Dropdown.Item as="button" active>English (English)</Dropdown.Item>
                    </DropdownButton>
                </Col>                    
            </Row>
        </div>
    )
}

export default Footer