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
