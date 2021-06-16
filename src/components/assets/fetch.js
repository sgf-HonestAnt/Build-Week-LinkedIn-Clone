const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MGFkYzI5MTkzMDAwMTU2MGFiOTMiLCJpYXQiOjE2MjM2NTcxODAsImV4cCI6MTYyNDg2Njc4MH0.TYp6DjYVT2X0_VJ1teUGTfeILyeVVOWVkXjn42Vqj7o"

export const getProfiles = async callback => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    const data = await response.json()
    callback(data)
  } catch (error) {
    console.log(error)
  }
}

export const getProfileById = async (id, callback) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    const data = await response.json()
    callback(data)
  } catch (error) {
    console.log(error)
  }
}

export const getExperiencesById = async (id, callback) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    const data = await response.json()
    callback(data)
  } catch (error) {
    console.log(error)
  }
}

export const addExperience = async payload => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/60c70adc291930001560ab93/experiences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const editProfile = async (payload) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    })
    // const data = await response.json()
    // console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const editExperience = async (experienceId, payload) => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/60c70adc291930001560ab93/experiences/${experienceId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(payload),
      }
    )
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const deleteExperience = async experienceId => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/60c70adc291930001560ab93/experiences/${experienceId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    )
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// Fetching Posts

export const getPosts = async callback => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    const data = await response.json()
    callback(data)
  } catch (error) {
    console.log(error)
  }
}