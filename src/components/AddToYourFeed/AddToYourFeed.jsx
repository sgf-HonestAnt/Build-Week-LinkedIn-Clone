import { Button } from 'react-bootstrap';

import "./AddToYourFeed.css"

const AddToYourFeed = () => {
  return (
    <section className="add-to-feed">
        <div className="d-flex justify-content-between mb-2">
             <h6>Add to your feed</h6>
            <i class="fas fa-info-circle"></i>
        </div>
        <div>
            <div className="d-flex justify-content-around">
                <div className="profile-img-container mr-2" style={{backgroundImage: `url("https://i1.sndcdn.com/avatars-000583246488-dhm5la-t500x500.jpg")`}}></div>
                <p><strong>Simon Sinek</strong> <i class="fab fa-linkedin"></i>
                <br />Optimist and Author at Simon Sinek Inc.
                <br /><Button variant="link" className="follow-btn p-1 mt-1"><i class="fas fa-plus pr-3"></i>Follow</Button></p>
            </div>
        </div>
        <div>
            <div className="d-flex justify-content-around">
                <div className="profile-img-container mr-2" style={{backgroundImage: `url("https://i1.sndcdn.com/avatars-000583246488-dhm5la-t500x500.jpg")`}}></div>
                <p><strong>Simon Sinek</strong> <i class="fab fa-linkedin"></i>
                <br />Optimist and Author at Simon Sinek Inc.
                <br /><Button variant="link" className="follow-btn p-1 mt-1"><i class="fas fa-plus pr-3"></i>Follow</Button></p>
            </div>
        </div>
        <div>
            <div className="d-flex justify-content-around">
                <div className="profile-img-container mr-2" style={{backgroundImage: `url("https://i1.sndcdn.com/avatars-000583246488-dhm5la-t500x500.jpg")`}}></div>
                <p><strong>Simon Sinek</strong> <i class="fab fa-linkedin"></i>
                <br />Optimist and Author at Simon Sinek Inc.
                <br /><Button variant="link" className="follow-btn p-1 mt-1"><i class="fas fa-plus pr-3"></i>Follow</Button></p>
            </div>
        </div>
        <div>
            <div className="view-recc">View all recommendations <i class="fas fa-arrow-right"></i></div>
        </div>
    </section>
  )
}

export default AddToYourFeed
