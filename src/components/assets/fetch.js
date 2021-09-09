export let MY_ID;

export const getLoggedUser = async () => { // (4) THIS MUST FIRE ON EVERY REFRESH OF APP.JS! 
  try {
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/signin`);
    const data = await response.json();
    console.log("getLoggedUser==>", data)
    MY_ID = data
  } catch (err) {
    console.log(err);
  }
};

export const postLoggedUser = async (id) => { // (3) THIS IS FIRED WHEN WE SUBMIT LOGIN FORM
  try {
    await fetch(`${process.env.REACT_APP_BE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier: id }),
    });
    MY_ID = id
    console.log("SUCCESSFULLY POSTED IDENTIFIER==>", id)
    console.log("MY_ID==>", MY_ID)
    // THIS WORKS NOW BUT ON REFRESH IT IS LOST, SO WE NEED TO PERFORM A GET AT "/SIGNIN" AT APP.JS. MY_ID WILL EQUAL TO WHATEVER ID RESULTS FROM GET SIGNIN
  } catch (error) {
    console.log(error);
  }
};

export const getProfilesLoggin = async (user, callback) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/loggin/${user ? user.userEmail : ""}`,
      {
        // headers: {
        //   Authorization: `Bearer ${TOKEN}`,
        // },
      }
    );
    const data = await response.json();
    callback(data[0]._id);
  } catch (error) {
    console.log(error);
  }
  // console.log(MY_ID);
};

// Profiles functions
export const getProfiles = async (callback) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/profile`);
    console.log("get profiles response ->", response);
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
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.log(error);
  }
};

export const editProfile = async (payload, pictureFile = null) => {
  try {
    await fetch(`${process.env.REACT_APP_BE_URL}/profile/${MY_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    });
    if (pictureFile) {
      const imgResponse = await fetch(
        `${process.env.REACT_APP_BE_URL}/profile/${MY_ID}/picture`,

        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          //   Authorization: `Bearer ${TOKEN}`,
          // },
          body: pictureFile,
        }
      );
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
    callback(data);
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
    const response = await fetch(`${process.env.REACT_APP_BE_URL}/posts`, {
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