import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AddToYourFeed.css";

const SingleAdd = ({person}) => {
    return (
        <>
        <div className="d-flex justify-content-between">
            <img src={person.image} alt={person._id} className="people mr-2" />
            <p className="w-100">
            <Link to={`/profile/${person._id}`}><strong>{person.name}</strong> <i className="fab fa-linkedin"></i></Link>
                <br />
                <Link to={`/profile/${person._id}`}><span className="title">{person.title}</span></Link>
                <br />
                <Button variant="link" className="follow-btn p-1 mt-1">
                    <i className="fas fa-plus pr-3"></i>Follow
                </Button>
            </p>
        </div>
        </>
    )
}

export default SingleAdd