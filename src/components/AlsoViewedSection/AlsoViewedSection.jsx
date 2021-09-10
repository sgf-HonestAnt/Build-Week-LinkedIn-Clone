import { useEffect } from "react";
import { useState } from "react";
import { getProfiles } from "../assets/fetch";
import AlsoViewedItem from "./AlsoViewedItem";

import "./AlsoViewedSection.css";

const AlsoViewed = (props) => { 
  const [profiles, setProfiles] = useState([]);

  useEffect(() => getProfiles(setProfiles), []); // FILTER OUT PROFILE THAT ID = MY_ID

  return (
    <section className="also-viewed-section d-flex flex-wrap">
      <p className="font-weight-bold">People also viewed</p>
      {profiles
        .filter((users) => users._id !== window.localStorage.getItem("my_id"))
        .slice(0, 10)
        .map((profile) => (
          <AlsoViewedItem key={profile._id} profileInfo={profile} />
        ))}
    </section>
  );
};

export default AlsoViewed;
