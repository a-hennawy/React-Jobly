import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = ({ tokenGen }) => {
  const INITIAL_VALS = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(INITIAL_VALS);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Welcome," + formData.username);
    tokenGen(formData.username, formData.password);
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
        <button>LOGIN</button>
      </form>
      <small>
        <Link to={"/signup"}>Sign-Up</Link>
        instead?
      </small>
    </div>
  );
};

export default LoginPage;
