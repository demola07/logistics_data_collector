import { useState } from "react";
import "./registration.css";
import { Formik, Form, Field } from "formik";

function RegistrationForm() {
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
    username: "",
    email: "",
    phone: "",
  };

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
        }}
      >
        {({ values, isSubmitting }) => (
          <Form id="registration">
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

            <div id="btn">
              {/* <button type="reset" id="cancel">
                Cancel
              </button> */}
              <button type="submit" id="register" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Register"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
