// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MGFkYzI5MTkzMDAwMTU2MGFiOTMiLCJpYXQiOjE2MjM2NTcxODAsImV4cCI6MTYyNDg2Njc4MH0.TYp6DjYVT2X0_VJ1teUGTfeILyeVVOWVkXjn42Vqj7o"
export const MY_ID = "6135e8f233924d3f1cc264f8";

// Profiles functions HELLO HELLO
export const getProfiles = async (callback) => {
  try {
<<<<<<< Updated upstream
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/profile/`, {
      // headers: {
      //   Authorization: `Bearer ${TOKEN}`,
      // },
    });
    const data = await response.json();
    callback(data);
=======
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/profile/`,
      {
        // headers: {
        //   Authorization: `Bearer ${TOKEN}`,
        // },
      }
    )
    const data = await response.json()
    callback(data)
>>>>>>> Stashed changes
  } catch (error) {
    console.log(error);
  }
};

export const getProfileById = async (id, callback) => {
  try {
<<<<<<< Updated upstream
    const pageId = id === "me" ? MY_ID : id;
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/profile/${pageId}`,
=======
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/profile/${id}`,
>>>>>>> Stashed changes
      {
        // headers: {
        //   Authorization: `Bearer ${TOKEN}`,
        // },
      }
<<<<<<< Updated upstream
    );
    console.log(response);
    const data = await response.json();
    callback(data);
=======
    )
    const data = await response.json()
    callback(data)
>>>>>>> Stashed changes
  } catch (error) {
    console.log(error);
  }
};

export const editProfile = async (id, payload, pictureFile = null) => {
  try {
<<<<<<< Updated upstream
    await fetch(`${process.env.REACT_APP_BE_URL}/profile/${MY_ID}`, {
      method: "PUT",
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer ${TOKEN}`,
      // },
      body: JSON.stringify(payload),
    });
    if (pictureFile) {
      const imgResponse = await fetch(
        `${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/picture`,
=======
    await fetch(`${process.env.REACT_APP_BE_URL}/profile/${id}`,
      {
        method: "PUT",
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer ${TOKEN}`,
        // },
        body: JSON.stringify(payload),
      })
    if (pictureFile) {
      const imgResponse = await fetch(`${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/picture`,
>>>>>>> Stashed changes
        {
          method: "POST",
          // headers: {
          //   Authorization: `Bearer ${TOKEN}`,
          // },
          body: pictureFile,
<<<<<<< Updated upstream
        }
      );
      console.log(imgResponse);
=======
        })
      console.log(imgResponse)
>>>>>>> Stashed changes
    }
  } catch (error) {
    console.log(error);
  }
};

// Experiences functions
export const addExperience = async (payload) => {
  try {
<<<<<<< Updated upstream
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/experiences`,
=======
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/experiences`,
>>>>>>> Stashed changes
      {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer ${TOKEN}`,
        // },
        body: JSON.stringify(payload),
<<<<<<< Updated upstream
      }
    );
    const data = await response.json();
    console.log(data);
=======
      })
    const data = await response.json()
    console.log(data)
>>>>>>> Stashed changes
  } catch (error) {
    console.log(error);
  }
};

export const addEditExperience = async (
  experienceId = "",
  payload,
  pictureFile = null
) => {
  try {
<<<<<<< Updated upstream
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/experiences/${experienceId}`,
=======
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/experiences/${experienceId}`,
>>>>>>> Stashed changes
      {
        method: experienceId ? "PUT" : "POST",
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer ${TOKEN}`,
        // },
        body: JSON.stringify(payload),
<<<<<<< Updated upstream
      }
    );
    const data = await response.json();

    if (pictureFile) {
      const imgResponse = await fetch(
        `${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/experiences/${data._id}/picture`,
=======
      })
    const data = await response.json()

    if (pictureFile) {
      const imgResponse = await fetch(`${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/experiences/${data._id}/picture`,
>>>>>>> Stashed changes
        {
          method: "POST",
          // headers: {
          //   Authorization: `Bearer ${TOKEN}`,
          // },
          body: pictureFile,
<<<<<<< Updated upstream
        }
      );
      console.log(imgResponse);
=======
        })
      console.log(imgResponse)
>>>>>>> Stashed changes
    }
  } catch (error) {
    console.log(error);
  }
};

export const getExperiencesById = async (id, callback) => {
  const userId = id === "me" ? MY_ID : id;
  try {
<<<<<<< Updated upstream
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/profile/${userId}/experiences`,
=======
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/profile/${userId}/experiences`,
>>>>>>> Stashed changes
      {
        // headers: {
        //   Authorization: `Bearer ${TOKEN}`,
        // },
<<<<<<< Updated upstream
      }
    );
    const data = await response.json();
    if (data) {
      callback(data);
    }
=======
      })
    const data = await response.json()
    callback(data)
>>>>>>> Stashed changes
  } catch (error) {
    console.log(error);
  }
};

export const deleteExperience = async (experienceId) => {
  try {
<<<<<<< Updated upstream
    await fetch(
      `${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/experiences/${experienceId}`,
=======
    await fetch(`${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/experiences/${experienceId}`,
>>>>>>> Stashed changes
      {
        method: "DELETE",
        // headers: {
        //   Authorization: `Bearer ${TOKEN}`,
        // },
<<<<<<< Updated upstream
      }
    );
=======
      })
>>>>>>> Stashed changes
  } catch (error) {
    console.log(error);
  }
};

// Posts functions
export const addPost = async (textPayload, imgPayload = null, userId) => {
  try {
<<<<<<< Updated upstream
    const text = textPayload;
    const textResponse = await fetch(`${process.env.REACT_APP_BE_URL}/posts`, {
      method: "POST",
      body: JSON.stringify({
        ...text,
        user: userId,
      }),
      headers: {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${TOKEN}`,
      },
    });
    const data = await textResponse.json();
    const id = data._id;
    if (imgPayload) {
      const imgResponse = await fetch(
        `${process.env.REACT_APP_BE_URL}/posts/${id}`,
=======
    const textResponse = await fetch(`${process.env.REACT_APP_BE_URL}/posts/`,
      {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer ${TOKEN}`,
        // },
        body: JSON.stringify(textPayload),
      })
    const data = await textResponse.json()
    console.log(data)
    if (imgPayload) {
      const imgResponse = await fetch(`${process.env.REACT_APP_BE_URL}/posts/${data._id}`,
>>>>>>> Stashed changes
        {
          method: "POST",
          // headers: {
          //   Authorization: `Bearer ${TOKEN}`,
          // },
          body: imgPayload,
<<<<<<< Updated upstream
        }
      );
      console.log(imgResponse);
=======
        })
      console.log(imgResponse)
>>>>>>> Stashed changes
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async (callback) => {
  try {
<<<<<<< Updated upstream
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/posts/`, {
      // headers: {
      //   Authorization: `Bearer ${TOKEN}`,
      // },
    });
    const data = await response.json();
    callback(data);
=======
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/posts/`,
      {
        // headers: {
        //   Authorization: `Bearer ${TOKEN}`,
        // },
      }
    )
    const data = await response.json()
    callback(data)
>>>>>>> Stashed changes
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (postId, callback) => {
  try {
<<<<<<< Updated upstream
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/posts/${postId}`,
=======
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/posts/${postId}`,
>>>>>>> Stashed changes
      {
        // headers: {
        //   Authorization: `Bearer ${TOKEN}`,
        // },
      }
<<<<<<< Updated upstream
    );
    const data = await response.json();
    callback(data);
=======
    )
    const data = await response.json()
    callback(data)
>>>>>>> Stashed changes
  } catch (error) {
    console.log(error);
  }
};
export const editPost = async (postId, payload, imgFile = null) => {
  try {
    await fetch(`${process.env.REACT_APP_BE_URL}/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    });
    if (imgFile) {
<<<<<<< Updated upstream
      const imgResponse = await fetch(
        `${process.env.REACT_APP_BE_URL}/posts/${postId}`,
=======
      const imgResponse = await fetch(`${process.env.REACT_APP_BE_URL}/posts/${postId}`,
>>>>>>> Stashed changes
        {
          method: "POST",
          // headers: {
          //   Authorization: `Bearer ${TOKEN}`,
          // },
          body: imgFile,
<<<<<<< Updated upstream
        }
      );
      console.log(imgResponse);
=======
        })
      console.log(imgResponse)
>>>>>>> Stashed changes
    }
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (postId) => {
  try {
<<<<<<< Updated upstream
    await fetch(`${process.env.REACT_APP_BE_URL}/posts/${postId}`, {
      method: "DELETE",
      // headers: {
      //   Authorization: `Bearer ${TOKEN}`,
      // },
    });
=======
    await fetch(`${process.env.REACT_APP_BE_URL}/posts/${postId}`,
      {
        method: "DELETE",
        // headers: {
        //   Authorization: `Bearer ${TOKEN}`,
        // },
      })
>>>>>>> Stashed changes
  } catch (error) {
    console.log(error);
  }
};
