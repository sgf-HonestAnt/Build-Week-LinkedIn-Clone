import React from "react"
import { useFormik, Formik, Field, Form } from "formik"
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { withRouter } from "react-router"

const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = "Required"
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less"
  }

  if (!values.surname) {
    errors.surname = "Required"
  } else if (values.surname.length > 20) {
    errors.surname = "Must be 20 characters or less"
  }

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  // if (!values.password) {
  //   errors.password = "Required"
  // } else if (values.password.length < 8) {
  //   errors.password = "Password must have at least 8 characters"
  // }

  if (!values.area) {
    errors.area = "Required"
  } else if (values.area.length < 3) {
    errors.area = "Area must have at least 3 characters"
  }

  if (!values.title) {
    errors.title = "Required"
  } else if (values.title.length < 5) {
    errors.title = "Title must have at least 5 characters"
  }

  if (!values.username) {
    errors.username = "Required"

  }

  if (!values.bio) {
    errors.bio = "Required"
  } else if (values.bio.length < 30) {
    errors.bio = "Your bio must have at least 30 characters"
  }

  return errors
}

const SignUpForm = (props) => {
  const [showAlert, setShowAlert] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      username: "",
      title: "",
      // password: "",
      bio: "",
      area: "",
    },
    validate,
    onSubmit: (values) => {
      createUser(values, " <<<<<< inside Signupform on submit")
    },
  })

  const createUser = async (values) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/profile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      )
      if (response.ok) {
        let dataRequested = await response.json()
        console.log(dataRequested)
        getUserData()
      } else {
        alert("User not created")
      }
    } catch (e) {
      return e
    }
  }

  const getUserData = async () => {

    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/profile`,
        {
          method: "Get",
          headers: {

          },
        }
      )
      let userData = await response.json()
      let userDataKeyList = Object.keys(userData)
      userDataKeyList.forEach((key) =>
        window.localStorage.setItem(key, userData[key])
      )
      setShowAlert(true)
      setTimeout(() => {
        props.history.push("/")
      }, 2000)
    } catch (e) {
      console.log(e)
      return e
    }
  }

  return (
    <>
      <div className="container">
        <div className="container  d-flex flex-column justify-content-center align-items-center pt-5 mb-3 mod-logo-maxWidth"><div id="login-logo" className="d-flex justify-content-center align-items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 21" preserveAspectRatio="xMinYMin meet" version="1.1" focusable="false" className="lazy-loaded"><g className="inbug" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><path d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0" className="bug-text-color" transform="translate(63.000000, 0.000000)"></path><path d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z" className="background" fill="#0a66c2"></path></g><g className="linkedin-text"><path d="M60,18 L57.2,18 L57.2,16.809 L57.17,16.809 C56.547,17.531 55.465,18.125 53.631,18.125 C51.131,18.125 48.978,16.244 48.978,13.011 C48.978,9.931 51.1,7.875 53.725,7.875 C55.35,7.875 56.359,8.453 56.97,9.191 L57,9.191 L57,3 L60,3 L60,18 Z M54.479,10.125 C52.764,10.125 51.8,11.348 51.8,12.974 C51.8,14.601 52.764,15.875 54.479,15.875 C56.196,15.875 57.2,14.634 57.2,12.974 C57.2,11.268 56.196,10.125 54.479,10.125 L54.479,10.125 Z" fill="#0a66c2"></path><path d="M47.6611,16.3889 C46.9531,17.3059 45.4951,18.1249 43.1411,18.1249 C40.0001,18.1249 38.0001,16.0459 38.0001,12.7779 C38.0001,9.8749 39.8121,7.8749 43.2291,7.8749 C46.1801,7.8749 48.0001,9.8129 48.0001,13.2219 C48.0001,13.5629 47.9451,13.8999 47.9451,13.8999 L40.8311,13.8999 L40.8481,14.2089 C41.0451,15.0709 41.6961,16.1249 43.1901,16.1249 C44.4941,16.1249 45.3881,15.4239 45.7921,14.8749 L47.6611,16.3889 Z M45.1131,11.9999 C45.1331,10.9449 44.3591,9.8749 43.1391,9.8749 C41.6871,9.8749 40.9121,11.0089 40.8311,11.9999 L45.1131,11.9999 Z" fill="#0a66c2"></path><polygon fill="#0a66c2" points="38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533"></polygon><path d="M16,8 L18.827,8 L18.827,9.441 L18.858,9.441 C19.289,8.664 20.562,7.875 22.136,7.875 C25.157,7.875 26,9.792 26,12.45 L26,18 L23,18 L23,12.997 C23,11.525 22.469,10.5 21.227,10.5 C19.719,10.5 19,11.694 19,13.197 L19,18 L16,18 L16,8 Z" fill="#0a66c2"></path><path d="M11,18 L14,18 L14,8 L11,8 L11,18 Z M12.501,6.3 C13.495,6.3 14.3,5.494 14.3,4.5 C14.3,3.506 13.495,2.7 12.501,2.7 C11.508,2.7 10.7,3.506 10.7,4.5 C10.7,5.494 11.508,6.3 12.501,6.3 Z" fill="#0a66c2"></path><polygon fill="#0a66c2" points="3 3 0 3 0 18 9 18 9 15 3 15"></polygon></g></svg></div></div>
        <div className="signup-form">
          <p>Sign up</p>
        </div>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            username: "",
            title: "",
            // password: "",
            bio: "",
            area: "",
          }}
        >
          <Form className="container" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRns8HYgfOEKEK0zDe1nolN_nqUO2yJBz_XAs-9wtNYNLWudR9hojq3QEInM1jeKAnNez8&usqp=CAU" width="50px" height="50px" />
                First Name :
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                {...formik.getFieldProps("name")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="form-control"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="fw-bold text-danger">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="surname">
                {" "}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRns8HYgfOEKEK0zDe1nolN_nqUO2yJBz_XAs-9wtNYNLWudR9hojq3QEInM1jeKAnNez8&usqp=CAU" width="50px" height="50px" />
                Last Name :
              </label>
              <Field
                id="surname"
                className="form-control"
                name="surname"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.surname}
              />
              {formik.touched.surname && formik.errors.surname ? (
                <div className="fw-bold text-danger">{formik.errors.surname}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                {" "}
                <img src="http://cdn.onlinewebfonts.com/svg/img_358140.png" width="50px" height="50px" />
                Email Address :
              </label>
              <Field
                id="email"
                className="form-control"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="fw-bold text-danger" >{formik.errors.email}</div>
              ) : null}
            </div>

            {/* <div className="form-group">
              <label htmlFor="password">
                {" "}
                <img src="https://image.flaticon.com/icons/png/512/958/958519.png" width="50px" height="50px" />
                Password :
              </label>
              <Field
                id="password"
                className="form-control"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="fw-bold text-danger">{formik.errors.password}</div>
              ) : null}
            </div> */}
            <div className="form-group">
              <label htmlFor="area">
                {" "}
                <img src="https://www.pngkey.com/png/full/82-821372_city-icon-png-download-buildings-clipart-black-and.png" width="50px" height="50px" />
                City, Country :{" "}
              </label>
              <Field
                id="area"
                className="form-control"
                name="area"
                type="area"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.area}
              />
              {formik.touched.area && formik.errors.area ? (
                <div className="fw-bold text-danger">{formik.errors.area}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="title">
                <img src="https://icons-for-free.com/iconfiles/png/512/case+job+work+icon-1320185594726714045.png" width="50px" height="50px" />
                Job Title :
              </label>
              <Field
                id="title"
                className="form-control"
                name="title"
                type="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="fw-bold text-danger">{formik.errors.title}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="username">
                <img src="https://www.shareicon.net/data/512x512/2015/12/15/687906_face_512x512.png" width="50px" height="50px" />
                Username :
              </label>
              <Field
                id="username"
                className="form-control"
                name="username"
                type="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="fw-bold text-danger">{formik.errors.username}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="bio">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzAwQzFGRDsiIGQ9Ik0yNTYsNTEyYy02OC4zOCwwLTEzMi42NjctMjYuNjI5LTE4MS4wMi03NC45OEMyNi42MjksMzg4LjY2NywwLDMyNC4zOCwwLDI1Ng0KCVMyNi42MjksMTIzLjMzMyw3NC45OCw3NC45OEMxMjMuMzMzLDI2LjYyOSwxODcuNjIsMCwyNTYsMHMxMzIuNjY3LDI2LjYyOSwxODEuMDIsNzQuOThDNDg1LjM3MSwxMjMuMzMzLDUxMiwxODcuNjIsNTEyLDI1Ng0KCXMtMjYuNjI5LDEzMi42NjctNzQuOTgsMTgxLjAyQzM4OC42NjcsNDg1LjM3MSwzMjQuMzgsNTEyLDI1Niw1MTJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMDhBOEVFOyIgZD0iTTQzNy4wMiw3NC45OEMzODguNjY3LDI2LjYyOSwzMjQuMzgsMCwyNTYsMHY1MTJjNjguMzgsMCwxMzIuNjY3LTI2LjYyOSwxODEuMDItNzQuOTgNCglDNDg1LjM3MSwzODguNjY3LDUxMiwzMjQuMzgsNTEyLDI1NlM0ODUuMzcxLDEyMy4zMzMsNDM3LjAyLDc0Ljk4eiIvPg0KPGc+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0U0RjdGRjsiIHBvaW50cz0iMzAxLDM3MSAzMDEsMjIxIDE5MSwyMjEgMTkxLDI1MSAyMTEsMjUxIDIxMSwzNzEgMTkwLDM3MSAxOTAsNDAxIDMyMCw0MDEgMzIwLDM3MSAJIi8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0U0RjdGRjsiIGQ9Ik0yNTYsMTkxYzI0LjgxMywwLDQ1LTIwLjE4Nyw0NS00NXMtMjAuMTg3LTQ1LTQ1LTQ1cy00NSwyMC4xODctNDUsNDVTMjMxLjE4NywxOTEsMjU2LDE5MXoiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNDQkVERkQ7IiBkPSJNMjU2LDE5MWMyNC44MTMsMCw0NS0yMC4xODcsNDUtNDVzLTIwLjE4Ny00NS00NS00NVYxOTF6Ii8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0NCRURGRDsiIHBvaW50cz0iMzAxLDM3MSAzMDEsMjIxIDI1NiwyMjEgMjU2LDQwMSAzMjAsNDAxIDMyMCwzNzEgCSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                Bio :
              </label>
              <textarea
                id="bio"
                className="form-control"
                name="bio"
                type="bio"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bio}
              />
              {formik.touched.bio && formik.errors.bio ? (
                <div className="fw-bold text-danger">{formik.errors.bio}</div>
              ) : null}
            </div>
            {showAlert && <Alert variant="success"> <Alert.Heading>Account Created Successfully</Alert.Heading></Alert>}
            <button
              type="submit"
              className="btn btn-success my-2 btn-large w-100"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default withRouter(SignUpForm)
