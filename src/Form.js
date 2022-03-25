import React, { useReducer, useState } from "react";
import styles from "./Form.module.css";
import { db } from "./Firebase-config";
import { addDoc, collection, getDoc, setDoc } from "firebase/firestore";
const Form = () => {
  // ************ Reducer InitialValue***********************
  let initalvalue = {
    PersonalDetails: [
      {
        FirstName: "",
        LastName: "",
        Email: "",
        DOB: 0,
        Gender: "",
      },
    ],
    AcademicDetails: [
      {
        EducationField: "",
        PassingYear: 0,
        Skills: [],
      },
    ],
    WorkExperience: [
      {
        // ResumeFile: "",
        Experience: "",
        SalaryExpectation: 0,
      },
    ],
    ContactDetails: [
      {
        MobileNumber: 0,
        Address: "",
      },
    ],
  };
  // ************ Reducer Function***********************
  const reducer = (state, action) => {
    switch (action.type) {
      case "firstName":
        return {
          ...state,
          PersonalDetails: [
            { ...state.PersonalDetails[0], FirstName: action.payload },
          ],
        };
      case "lastName":
        return {
          ...state,
          PersonalDetails: [
            { ...state.PersonalDetails[0], LastName: action.payload },
          ],
        };
      case "email":
        return {
          ...state,
          PersonalDetails: [
            { ...state.PersonalDetails[0], Email: action.payload },
          ],
        };
      case "DOB":
        return {
          ...state,
          PersonalDetails: [
            {
              ...state.PersonalDetails[0],
              DOB: action.payload,
            },
          ],
        };
      case "gender":
        return {
          ...state,
          PersonalDetails: [
            { ...state.PersonalDetails[0], Gender: action.payload },
          ],
        };
      case "educationField":
        return {
          ...state,
          AcademicDetails: [
            {
              EducationField: action.payload,
            },
          ],
        };
      case "passingYear":
        return {
          ...state,
          AcademicDetails: [
            { ...state.AcademicDetails[0], PassingYear: action.payload },
          ],
        };
      case "html":
        return {
          ...state,
          AcademicDetails: [
            { ...state.AcademicDetails[0], Skills: [action.payload] },
          ],
        };
      case "css":
        return {
          ...state,
          AcademicDetails: [
            {
              ...state.AcademicDetails[0],
              Skills: [...state.AcademicDetails[0].Skills, action.payload],
            },
          ],
        };
      case "JavaScript":
        return {
          ...state,
          AcademicDetails: [
            {
              ...state.AcademicDetails[0],
              Skills: [...state.AcademicDetails[0].Skills, action.payload],
            },
          ],
        };
      case "Bootstrap":
        return {
          ...state,
          AcademicDetails: [
            {
              ...state.AcademicDetails[0],
              Skills: [...state.AcademicDetails[0].Skills, action.payload],
            },
          ],
        };
      case "React.js":
        return {
          ...state,
          AcademicDetails: [
            {
              ...state.AcademicDetails[0],
              Skills: [...state.AcademicDetails[0].Skills, action.payload],
            },
          ],
        };
      case "resumeFile":
        return {
          ...state,
          WorkExperience: [
            {
              ...state.WorkExperience[0],
              ResumeFile: action.payload,
            },
          ],
        };
      case "WorkExperience":
        return {
          ...state,
          WorkExperience: [
            {
              ...state.WorkExperience[0],
              Experience: action.payload,
            },
          ],
        };
      case "SalaryExpectation":
        return {
          ...state,
          WorkExperience: [
            {
              ...state.WorkExperience[0],
              SalaryExpectation: action.payload,
            },
          ],
        };
      case "MobileNumber":
        return {
          ...state,
          ContactDetails: [
            {
              ...state.ContactDetails[0],
              MobileNumber: action.payload,
            },
          ],
        };
      case "address":
        return {
          ...state,
          ContactDetails: [
            {
              ...state.ContactDetails[0],
              Address: action.payload,
            },
          ],
        };
      default:
    }
  };
  // ************ useReducer define ***********************

  const [state, dispatch] = useReducer(reducer, initalvalue);
  // ************ Firebase Database Ref ***********************
  const dataref = collection(db, "users");
  // ************ submit Data ***********************
  const submit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "users"), state);
    // await setDoc(collection(db, "users"), state);
  };

  console.log(state);

  return (
    <div className={styles.formContainer}>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Personal Details</legend>
          <input
            required
            type="text"
            placeholder="Enter Your FirstName"
            onChange={(e) =>
              dispatch({ type: "firstName", payload: e.target.value })
            }
          />
          <br />
          <input
            required
            type="text"
            placeholder="Enter Your SecondName"
            onChange={(e) =>
              dispatch({ type: "lastName", payload: e.target.value })
            }
          />
          <br />
          <input
            required
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
          />
          <br />
          <input
            required
            type="date"
            onChange={(e) => dispatch({ type: "DOB", payload: e.target.value })}
          />
          <br />
          <label htmlFor="gender">Male</label>
          <input
            required
            type="radio"
            value="male"
            name="gender"
            id="gender"
            onChange={(e) =>
              dispatch({ type: "gender", payload: e.target.value })
            }
          />
          <label htmlFor="gender2" name="female">
            Female
          </label>
          <input
            required
            type="radio"
            value="female"
            name="gender"
            id="gender2"
            onChange={(e) =>
              dispatch({ type: "gender", payload: e.target.value })
            }
          />
        </fieldset>
        <fieldset>
          <legend>Academic Details</legend>
          <select
            required
            name="EducationField"
            defaultValue={"DEFAULT"}
            onChange={(e) =>
              dispatch({ type: "educationField", payload: e.target.value })
            }
          >
            <option value="DEFAULT" disabled>
              Select Your Education Field
            </option>
            <option value="Bsc">BSC</option>
            <option value="BAF">BAF</option>
            <option value="BMM">BMM</option>
            <option value="BMS">BMS</option>
            <option value="BCom">BCom</option>
            <option value="BE">BE</option>
          </select>
          <br />
          <input
            required
            type="number"
            placeholder="Passing Year"
            onChange={(e) =>
              dispatch({ type: "passingYear", payload: e.target.value })
            }
          />

          <p>Select Your Skills </p>
          <label htmlFor="HTML">HTML</label>
          <input
            required
            type="checkbox"
            id="HTML"
            name="HTML"
            onChange={(e) => dispatch({ type: "html", payload: e.target.name })}
          />
          <label htmlFor="CSS">CSS</label>
          <input
            required
            type="checkbox"
            id="CSS"
            name="CSS"
            onChange={(e) => dispatch({ type: "css", payload: e.target.name })}
          />
          <label htmlFor="JavaScript">JavaScript</label>
          <input
            required
            type="checkbox"
            id="JavaScript"
            name="JavaScript"
            onChange={(e) =>
              dispatch({ type: "JavaScript", payload: e.target.name })
            }
          />
          <label htmlFor="Bootstrap">Bootstrap</label>
          <input
            required
            type="checkbox"
            id="Bootstrap"
            name="Bootstrap"
            onChange={(e) =>
              dispatch({ type: "Bootstrap", payload: e.target.name })
            }
          />
          <label htmlFor="React.js">React.js</label>
          <input
            required
            type="checkbox"
            id="React.js"
            name="React.js"
            onChange={(e) =>
              dispatch({ type: "React.js", payload: e.target.name })
            }
          />
        </fieldset>
        <fieldset>
          <legend>Work Experience</legend>
          <label htmlFor="resume">Upload Your Resume: </label>

          <br />
          <select
            required
            name="workExperience"
            defaultValue={"DEFAULT"}
            onChange={(e) =>
              dispatch({ type: "WorkExperience", payload: e.target.value })
            }
          >
            <option value="DEFAULT" disabled>
              Select Your Work Experience
            </option>
            <option value="Fresher">Fresher</option>
            <option value="6months">6Months</option>
            <option value="1 year">1 Years</option>
            <option value="2 year">2 Years</option>
            <option value="3 year">3 Years</option>
            <option value="4 year">4 Years</option>
          </select>
          <br />
          <input
            required
            type="number"
            placeholder="Enter Your Salary Expection"
            onChange={(e) =>
              dispatch({ type: "SalaryExpectation", payload: e.target.value })
            }
          />
        </fieldset>
        <fieldset>
          <legend>Contact Details</legend>
          <input
            required
            type="phone"
            placeholder="Enter Your Mobile Number"
            onChange={(e) =>
              dispatch({ type: "MobileNumber", payload: e.target.value })
            }
          />
          <br />
          <textarea
            required
            name="address"
            id="address"
            cols="30"
            rows="5"
            placeholder="Enter Your Address"
            onChange={(e) =>
              dispatch({ type: "address", payload: e.target.value })
            }
          ></textarea>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
