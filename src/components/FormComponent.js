import React, { useState } from "react";
import "./FormComponent.css";

const FormComponent = ({ setFormData }) => {
  const [formData, setFormDataLocal] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = (name, value) => {
    let error = "";
    switch (name) {
      case "firstName":
        if (!value) error = "First Name is required";
        break;
      case "lastName":
        if (!value) error = "Last Name is required";
        break;
      case "username":
        if (!value) error = "Username is required";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) error = "Email is required";
        else if (!emailRegex.test(value)) error = "Invalid email format";
        break;
      case "password":
        if (!value) error = "Password is required";
        break;
      case "phoneNo":
        const phoneRegex = /^\+\d{1,3} \d{10}$/;
        if (!value) error = "Phone Number is required";
        else if (!phoneRegex.test(value))
          error = "Invalid phone number. It should be in the format +CCC XXXXXXXXXX";
        break;
      case "country":
        if (!value) error = "Country is required";
        break;
      case "city":
        if (!value) error = "City is required";
        break;
      case "panNo":
        if (!value) error = "Pan Number is required";
        break;
      case "aadharNo":
        const aadharRegex = /^\d{12}$/;
        if (!value) error = "Aadhar Number is required";
        else if (!aadharRegex.test(value))
          error = "Invalid Aadhar number, enter your 12-digit Aadhar number";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validate(name, value);

    setFormDataLocal({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentErrors = {};

    Object.keys(formData).forEach((name) => {
      const error = validate(name, formData[name]);
      if (error) currentErrors[name] = error;
    });

    if (Object.keys(currentErrors).length === 0) {
      setFormData(formData);
    } else {
      setErrors(currentErrors);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isFormValid =
    Object.values(errors).every((error) => !error) &&
    Object.values(formData).every((value) => value);

  return (
    <div>
      <div className="container">
        <div className="header">
          <span className="text">Registration Form</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            {[
              { label: "First Name", name: "firstName", type: "text" },
              { label: "Last Name", name: "lastName", type: "text" },
              { label: "Username", name: "username", type: "text" },
              { label: "Email", name: "email", type: "email" },
              {
                label: "Password",
                name: "password",
                type: showPassword ? "text" : "password",
              },
              { label: "Pan Number", name: "panNo", type: "text" },
              { label: "Aadhar Number", name: "aadharNo", type: "text" },
            ].map(({ label, name, type }) => (
              <div key={name} className="input">
                <label>{label}:</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={`input-field ${
                    errors[name] ? "invalid" : "valid"
                  }`}
                />
                {name === "password" && (
                  <button type="button" onClick={togglePasswordVisibility} style={{"background-color":"lightblue","border-radius":"8px", "font-size":"15px", "font-weight":"bold", "cursor":"pointer"}}>
                    {showPassword ? "Hide" : "Show"}
                  </button>
                )}
                {errors[name] && <span className="error">{errors[name]}</span>}
              </div>
            ))}
            <div className="input">
              <label>Phone Number (with country code):</label>
              <input
                type="text"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                placeholder="+123 4567890123"
                className={`input-field ${
                  errors.phoneNo ? "invalid" : "valid"
                }`}
              />
              {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
            </div>
            <div className="input" >
              <label>Country:</label>
              <select style={{"width":"520px"}}
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`input-field ${
                  errors.country ? "invalid" : "valid"
                }`}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="China">China</option>
              </select>
              {errors.country && (
                <span className="error">{errors.country}</span>
              )}
            </div>
            <div className="input">
              <label>City:</label>
              <select style={{"width":"520px"}}
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`input-field ${errors.city ? "invalid" : "valid"}`}
              >
                <option value="">Select City</option>
                {formData.country === "India" && (
                  <>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Other City in India">
                      Other City in India
                    </option>
                  </>
                )}
                {formData.country === "USA" && (
                  <>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Houston">Houston</option>
                    <option value="Phoenix">Phoenix</option>
                    <option value="Philadelphia">Philadelphia</option>
                    <option value="San Antonio">San Antonio</option>
                    <option value="San Diego">San Diego</option>
                    <option value="Dallas">Dallas</option>
                    <option value="Austin">Austin</option>
                    <option value="Other City in USA">Other City in USA</option>
                  </>
                )}
                {formData.country === "Canada" && (
                  <>
                    <option value="Toronto">Toronto</option>
                    <option value="Montreal">Montreal</option>
                    <option value="Vancouver">Vancouver</option>
                    <option value="Calgary">Calgary</option>
                    <option value="Ottawa">Ottawa</option>
                    <option value="Edmonton">Edmonton</option>
                    <option value="Winnipeg">Winnipeg</option>
                    <option value="Quebec City">Quebec City</option>
                    <option value="Hamilton">Hamilton</option>
                    <option value="Other City in Canada">
                      Other City in Canada
                    </option>
                  </>
                )}
                {formData.country === "Australia" && (
                  <>
                    <option value="Sydney">Sydney</option>
                    <option value="Melbourne">Melbourne</option>
                    <option value="Brisbane">Brisbane</option>
                    <option value="Perth">Perth</option>
                    <option value="Adelaide">Adelaide</option>
                    <option value="Gold Coast">Gold Coast</option>
                    <option value="Canberra">Canberra</option>
                    <option value="Newcastle">Newcastle</option>
                    <option value="Sunshine Coast">Sunshine Coast</option>
                    <option value="Wollongong">Wollongong</option>
                    <option value="Geelong">Geelong</option>
                  </>
                )}
                {formData.country === "China" && (
                  <>
                    <option value="Beijing">Beijing</option>
                    <option value="Shanghai">Shanghai</option>
                    <option value="Guangzhou">Guangzhou</option>
                    <option value="Shenzhen">Shenzhen</option>
                    <option value="Chengdu">Chengdu</option>
                    <option value="Hangzhou">Hangzhou</option>
                    <option value="Wuhan">Wuhan</option>
                    <option value="Xi'an">Xi'an</option>
                    <option value="Chongqing">Chongqing</option>
                    <option value="Tianjin">Tianjin</option>
                    <option value="Nanjing">Nanjing</option>
                  </>
                )}
              </select>
              {errors.city && <span className="error">{errors.city}</span>}
            </div>
          </div>

          <div className="submit-container">
            <button
              className={`submit ${!isFormValid ? "gray" : ""}`}
              type="submit"
              disabled={!isFormValid}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
