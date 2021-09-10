import { useEffect, useState } from "react";
import { getProfileById } from "../../assets/fetch";
import { Link } from "react-router-dom";

import "./MyProfileCard.css";

const MyProfileCard = ({ id }) => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProfileById(id, setProfile)
    setLoading(false)
  }, [id]);

  console.log("userId at MyProfileCard=>", id); // = userId
  console.log("profile at MyProfileCard=>", profile) // = results in data, but not getting profile image.

  return (
    !loading && profile !== undefined && (
      <section className="feed-my-profile">
        <div className="hero"></div>
        <Link to="/profile/me">
          <img className="avatar rounded-circle" src={profile.image} alt="" />
        </Link>
        <h6 className="text-center my-name">
          <Link to="/profile/me">
            {profile.name} {profile.surname}
          </Link>
        </h6>

        <p className="text-center my-title border-bottom pb-3">
          {profile.title}
        </p>
        <div className="d-flex flex-column px-3 views border-bottom">
          <div className="d-flex justify-content-between mt-3">
            <p>Who viewed your profile</p>
            <span>62</span>
          </div>
          <div className="d-flex justify-content-between pb-3">
            <p>Views of your post</p>
            <span>108</span>
          </div>
        </div>
        <p className="p-3 my-items">
          <i className="fas fa-bookmark mr-2"></i>
          My Items
        </p>
      </section>
    )
  );
};

export default MyProfileCard;
