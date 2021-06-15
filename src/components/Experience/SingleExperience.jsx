import React from "react"

const SingleExperience = ({ experienceData }) => {
  return (
    <div className="single-experience d-flex my-2">
      <img src={experienceData.image || "https://via.placeholder.com/150"} alt="" height="56px" />
      <div className="d-flex flex-column ml-3 w-100">
        <div className="d-flex justify-content-between">
          <h6>{experienceData.role}</h6>
          <button>
            <i className="fas fa-pencil-alt"></i>
          </button>
        </div>
        <p>{experienceData.company}</p>
        <p className="font-grey">{`${new Date(experienceData.startDate).toLocaleDateString()} - ${
          experienceData.endDate ? new Date(experienceData.endDate).toLocaleDateString() : ""
        }`}</p>
        <p className="font-grey">{experienceData.area}</p>
        <p>{experienceData.description}</p>
        <hr className="my-3" />
      </div>
    </div>
  )
}

export default SingleExperience
