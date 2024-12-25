import { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = ({ onSignup }) => {
  const INITIAL_VALS = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(INITIAL_VALS);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Welcome," + formData.username);
    const { username, password, firstName, lastName, email } = formData;
    //Do i need to run a function to do something?
    onSignup(username, password, firstName, lastName, email);
    setFormData(INITIAL_VALS);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="firstName">First name: </label>
        <input
          type="text"
          placeholder="Enter first name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last name: </label>
        <input
          type="text"
          placeholder="Enter last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button>LOGIN</button>
      </form>
      <small>
        <Link to={"/login"}>Login</Link>
        instead?
      </small>
    </div>
  );
};

export default SignupPage;
