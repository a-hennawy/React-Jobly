import { NavLink } from "react-router-dom";
import { useContext } from "react";

import UserContext from "./context/userContext";

const Navigation = ({ logged }) => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  if (user) {
    console.log(user);
    console.log(user.user.username);
  }

  return (
    <nav>
      <NavLink
        to={"/"}
        style={({ isActive }) => ({
          margin: "0 10px",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to={"/companies"}
        style={({ isActive }) => ({
          margin: "0 10px",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Companies
      </NavLink>

      <NavLink
        to={"/jobs"}
        style={({ isActive }) => ({
          margin: "0 10px",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Jobs
      </NavLink>

      {!logged && (
        <NavLink
          to={"/login"}
          style={({ isActive }) => ({
            margin: "0 10px",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Login
        </NavLink>
      )}

      {!logged && (
        <NavLink
          to={"/signup"}
          style={({ isActive }) => ({
            margin: "0 10px",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Signup
        </NavLink>
      )}

      {logged && (
        <NavLink
          to={"/profile"}
          style={({ isActive }) => ({
            margin: "0 10px",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          {user.user.username}
        </NavLink>
      )}

      {logged && (
        <NavLink
          to={"/signout"}
          style={({ isActive }) => ({
            margin: "0 10px",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          SignOut
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
