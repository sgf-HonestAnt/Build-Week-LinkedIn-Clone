import Logo from "../../assets/LinkedIn-Logos/LI-Logo.png"
import { Button } from 'react-bootstrap'
import "./FeedPageFooter.css"

const FeedPageFooter = () => {
    return (
        <section className="feedpagefooter">
            <div className="px-4">
                <Button variant="link">About</Button>
                <Button variant="link">Accessibility</Button>
                <Button variant="link">Help Center</Button>
                <Button variant="link">Privacy &amp; Terms</Button>
                <Button variant="link">Ad Choices</Button>
                <Button variant="link">Advertising</Button>
                <Button variant="link">Business Services</Button>
                <Button variant="link">Get the LinkedIn app</Button>
                <Button variant="link">More</Button>
            </div>
            <div className="pt-3">
                <img src={Logo} alt="LinkedIn" className="logo" />
                <Button variant="link" className="corp">LinkedIn Corporation © 2021</Button>
            </div>
        </section>
    )
}

export default FeedPageFooter
