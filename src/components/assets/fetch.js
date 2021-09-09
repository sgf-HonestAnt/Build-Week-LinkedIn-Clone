// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MGFkYzI5MTkzMDAwMTU2MGFiOTMiLCJpYXQiOjE2MjM2NTcxODAsImV4cCI6MTYyNDg2Njc4MH0.TYp6DjYVT2X0_VJ1teUGTfeILyeVVOWVkXjn42Vqj7o"
export const MY_ID = "6135e8f233924d3f1cc264f8";

// Profiles functions HELLO HELLO
export const getProfiles = async (callback) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/profile/`, {
      // headers: {
      //   Authorization: `Bearer ${TOKEN}`,
      // },
    });
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.log(error);
  }
};

export const getProfileById = async (id, callback) => {
  try {
    const pageId = id === "me" ? MY_ID : id;
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/profile/${pageId}`,
      {
        // headers: {
        //   Authorization: `Bearer ${TOKEN}`,
        // },
      }
    );
    console.log(response);
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.log(error);
  }
};

export const editProfile = async (payload, pictureFile = null) => {
  try {
    await fetch(`${process.env.REACT_APP_BE_URL}/profile/`, {
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
        {
          method: "POST",
          // headers: {
          //   Authorization: `Bearer ${TOKEN}`,
          // },
          body: pictureFile,
        }
      );
      console.log(imgResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

// Experiences functions
export const addExperience = async (payload) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/experiences`,
      {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer ${TOKEN}`,
        // },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    console.log(data);
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
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/experiences/${experienceId}`,
      {
        method: experienceId ? "PUT" : "POST",
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer ${TOKEN}`,
        // },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();

    if (pictureFile) {
      const imgResponse = await fetch(
        `${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/experiences/${data._id}/picture`,
        {
          method: "POST",
          // headers: {
          //   Authorization: `Bearer ${TOKEN}`,
          // },
          body: pictureFile,
        }
      );
      console.log(imgResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getExperiencesById = async (id, callback) => {
  const userId = id === "me" ? MY_ID : id;
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/profile/${userId}/experiences`,
      {
        // headers: {
        //   Authorization: `Bearer ${TOKEN}`,
        // },
      }
    );
    const data = await response.json();
    if (data) {
      callback(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteExperience = async (experienceId) => {
  try {
    await fetch(
      `${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/experiences/${experienceId}`,
      {
        method: "DELETE",
        // headers: {
        //   Authorization: `Bearer ${TOKEN}`,
        // },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// Posts functions
export const addPost = async (textPayload, imgPayload = null, userId) => {
  try {
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
        {
          method: "POST",
          // headers: {
          //   Authorization: `Bearer ${TOKEN}`,
          // },
          body: imgPayload,
        }
      );
      console.log(imgResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async (callback) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/posts/`, {
      // headers: {
      //   Authorization: `Bearer ${TOKEN}`,
      // },
    });
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (postId, callback) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/posts/${postId}`,
      {
        // headers: {
        //   Authorization: `Bearer ${TOKEN}`,
        // },
      }
    );
    const data = await response.json();
    callback(data);
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
      const imgResponse = await fetch(
        `${process.env.REACT_APP_BE_URL}/posts/${postId}`,
        {
          method: "POST",
          // headers: {
          //   Authorization: `Bearer ${TOKEN}`,
          // },
          body: imgFile,
        }
      );
      console.log(imgResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (postId) => {
  try {
    await fetch(`${process.env.REACT_APP_BE_URL}/posts/${postId}`, {
      method: "DELETE",
      // headers: {
      //   Authorization: `Bearer ${TOKEN}`,
      // },
    });
  } catch (error) {
    console.log(error);
  }
};
