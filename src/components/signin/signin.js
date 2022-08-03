import { useState } from "react";
import "./signin.css";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [inputs, setInputs] = useState({});

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(inputs);
  // }

  // function handleChange(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((values) => ({ ...values, [name]: value }));
  // }

  const initialValues = {
    email: "",
    pa: "",
  };
  const navigate = useNavigate();
  return (
    <div id="container">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 700);
          navigate(
            "/userdashboard/user-dashboard.js/#id_token=eyJraWQiOiJ3QXAxS29MdVh3RjMyQk9GOVdkQ0gyRUxtc2pWR25wTWpWMXFJZmN6VTZFPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiNmNsRU1NUHZwU3FfREU2NVI4N1pHdyIsInN1YiI6IjM1ZDMwYmQ0LTNiY2YtNDAyZC04MGZlLWI3NWVkYTE4NTVhYSIsImNvZ25pdG86Z3JvdXBzIjpbImFjY2MwYmNlMTE2NjExZWQ5YjNhYWExMDJjMmE4ZGU2Il0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX0hva2V4bGNkUiIsImNvZ25pdG86dXNlcm5hbWUiOiJ0ZW5hbnQtYWRtaW4tYWNjYzBiY2UxMTY2MTFlZDliM2FhYTEwMmMyYThkZTYiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJkZW1vbGEwNyIsImN1c3RvbTp0ZW5hbnRJZCI6ImFjY2MwYmNlMTE2NjExZWQ5YjNhYWExMDJjMmE4ZGU2IiwiYXVkIjoiM2Q2M2FhampsbDh2cWNqaDQ5ZjB1cW4yNHMiLCJldmVudF9pZCI6IjQ0NmNiZjNlLTliMDItNDRhNi04OTBmLTk4NTZiYjcxOTIxMiIsImN1c3RvbTp1c2VyUm9sZSI6IlRlbmFudEFkbWluIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTkzMzY5MDksImV4cCI6MTY1OTM0MDUwOSwiaWF0IjoxNjU5MzM2OTA5LCJqdGkiOiIyNzM0MWI5OS02OTAyLTRmZDUtODk4YS1hMzlhMDI1MmZhOGUiLCJlbWFpbCI6ImRlbW9sYXNvYmFraUBnbWFpbC5jb20ifQ.CSdvNJk2qnQwCMeYpiwtCQA1rNSM7-gihDQmpCA9kntGupK3_vgLGYOC-nHpWxQIhuqD_f8FPuG0xJJbxHjQbqR7l38bxyAwBCZlNp6gqZHa54R8_iUn3bV84QPNDxeIsV2auR6v32A14_6Kj_qG1ZU1_wqCNBSubQR5CTtHWEQbFAcXJSxd0srw1VqXjQY2r1UGf5SfPFsbRfXC15MCNLvr84TowsIS3myD40M1WSFGttooSHI_Rsjr5zB1mbzU2PWmbhmQRBuC0IY-uf1XNiFV7iysvZj6xlQ3EcnKoC8NkY9hbobx-SJO_KUKMUfJzsb61wMr8c2iDvEx2Q7ngQ"
          );
        }}
      >
        {({ values, isSubmitting }) => (
          <Form id="signin">
            {/* <div className="details">
            <label htmlFor="orgname" className="col-leftr">
              Organization Name:
            </label>
            <Field
              type="text"
              name="orgname"
              value={inputs.orgname || ""}
              onChange={handleChange}
              className="form-elect-input"
            />
            <br></br>
          </div> */}

            <div className="details">
              <label htmlFor="firstname" className="col-leftr">
                Username:
              </label>
              <Field
                type="text"
                name="username"
                // value={inputs.firstname || ""}
                // onChange={handleChange}
                className="form-elect-input"
              />
              <br></br>
            </div>

            {/* <div className="details">
            <label htmlFor="lastname" className="col-leftr">
              Last Name:
            </label>
            <Field
              type="text"
              name="lastname"
              value={inputs.lastname || ""}
              onChange={handleChange}
              className="form-elect-input"
            />
            <br></br>
          </div> */}

            <div className="details">
              <label htmlFor="email" className="col-leftr">
                Email Address:
              </label>
              <Field
                type="text"
                name="email"
                // onChange={handleChange}
                className="form-elect-input"
              />
              <br></br>
            </div>

            <div className="details">
              <label htmlFor="phone" className="col-leftr">
                Phone Number:
              </label>
              <Field
                type="text"
                name="phone"
                // onChange={handleChange}
                className="form-elect-input"
              />
              <br></br>
            </div>

            <div id="btn" className="">
              <button type="submit" id="log" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Login"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignInForm;
