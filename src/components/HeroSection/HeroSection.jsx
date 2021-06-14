import { Card, Button, Badge, Modal } from 'react-bootstrap';
import { getMyProfile } from "../assets/fetch"
import { useEffect } from "react"
import { useState } from "react"
import Logo from "../assets/LinkedIn-Logos/LI-Logo.png";

import "./HeroSection.css";

const HeroSection = () => {

    const [myProfile, setMyProfile] = useState([])      
    useEffect(() => getMyProfile(setMyProfile), [])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(myProfile.name)

    return (
        <div className="hero">
            <div className="hero-cover p-relative">
                <Card.Img variant="top" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F1-office-1516329_1920-1200x299.jpg" />
                <i className="fas fa-pen-square"></i>
                <img className="profile-pic img-fluid" src={myProfile.image} alt="..." />
            </div>                
            <i className="fas fa-pencil-alt pt-4 pr-4"></i>                
            <div className="hero-columns pt-5">
                <div className="mr-5">
                    <Card.Body>
                        <Card.Title className="mb-0 profile-name">{myProfile.name} {myProfile.surname}</Card.Title>
                        <Card.Text>{myProfile.title}
                        <br />{myProfile.area} • <Button variant="link" onClick={handleShow}>Contact info</Button>
                        {/* Include a pop-up modal featuring the following information: 
                        myProfile.email and "linkedin.com/in/sarah-guinevere-fisher-0073b316b"*/}
                        <br /><Button variant="link">500+ connections</Button></Card.Text>
                        <Card.Text>
                            <Badge pill variant="primary">Open to</Badge>
                            <Badge pill variant="light">Add section</Badge>
                            <Badge pill variant="light">More</Badge>
                        </Card.Text>
                    </Card.Body>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>{myProfile.name} {myProfile.surname}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Contact info</h5>
                            <div><i class="fab fa-linkedin"></i>Your Profile
                            <br />linkedin.com/in/sarah-guinevere-fisher-0073b316b</div>
                            <div><i class="far fa-envelope"></i>Email
                            <br />{myProfile.email}</div>
                        </Modal.Body>
                    </Modal>


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