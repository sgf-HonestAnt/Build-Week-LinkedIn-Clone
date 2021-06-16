import { addPost } from "../assets/fetch"
import { useState } from "react"
import { Form, Button } from 'react-bootstrap'

import "./FeedPostSection.css"

const FeedPostSection = ({ onUpdate }) => {
    const [data, setData] = useState({
        text: ''
    })

    console.log(data)

    const getData = (e) => {
        setData({ text: e.currentTarget.value })
    }

    return (
        <section className="feedpost-section">
        <div className="d-flex justify-content-between">
            <div className="profile-img-container mr-2" style={{backgroundImage: `url("https://i1.sndcdn.com/avatars-000583246488-dhm5la-t500x500.jpg")`}}></div>
            {/* ${profileData.image} */}
            <Form
                className="w-100" 
                onSubmit={e => {
                    e.preventDefault()
                    addPost(data)
                    setData({text: '',})
                    onUpdate()
            }}>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        className="post-form"
                        placeholder="Start a post"
                        value={data.text}
                        onChange={e => getData(e)}
                    />
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form.Group>
            </Form>
        </div>
            <div className="d-flex justify-content-around feedpost-icons">
                <div><i className="fas fa-image mr-2"></i>Photo</div>
                <div><i className="fab fa-youtube mr-2"></i>Video</div>
                <div><i className="fas fa-calendar-alt mr-2"></i>Event</div>
                <div><i className="fab fa-elementor mr-2"></i>Write article</div>
            </div>
        </section>
    )
}

export default FeedPostSection
