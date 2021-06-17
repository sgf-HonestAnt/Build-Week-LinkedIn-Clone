import { useEffect, useState } from "react"
import { getProfileById, uploadProfilePic } from "../../assets/fetch"
import { Button } from 'react-bootstrap'

import "./MyProfileCard.css"

const MyProfileCard = ({ id }) => {
  const [profile, setProfile] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)

  useEffect(() => getProfileById(id, setProfile), [id])

  const submitImage = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("profile", selectedFile)
    uploadProfilePic(formData)
  }

  return (
    profile && (
      <section className="feed-my-profile">
        <div className="hero"></div>
        <img className="avatar rounded-circle" src={profile.image} alt="" />
        <h6 className="text-center my-name">
          {profile.name} {profile.surname}
        </h6>

        <div className="awesome-input-custom-form">
          <form
            className="mb-1"
            onSubmit={e => {
              submitImage(e)
            }}
          >
            <input type="file" className="awesome-input-form" onChange={e => setSelectedFile(e.target.files[0])} />
            <Button type="submit" variant="success" className="awesome-input-button py-0 text-center">submit</Button>
          </form>
        </div>

        <p className="text-center my-title border-bottom pb-3">{profile.title}</p>
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
  )
}

export default MyProfileCard
