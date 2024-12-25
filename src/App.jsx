import { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";

import Navigation from "./Navigation";
import JoblyApi from "../starter/api";
import ListEntities from "./ListEntities";
import EntityItem from "./EntityItem";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import ProfilePage from "./ProfilePage";
import UserContext from "./context/userContext";
import SignoutPage from "./SignoutPage";

function App() {
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  // const [currUser, setCurrUser] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const companies = await JoblyApi.request("companies", {}, "get");
      const jobs = await JoblyApi.request("jobs", {}, "get");
      setCompanies(companies);
      setJobs(jobs);
    };

    fetchData();
  }, []);

  const login = async (username, password) => {
    const { token } = await JoblyApi.signIn(username, password);
    const userInfo = await JoblyApi.getUserInfo(username);

    setUser(userInfo);
    setToken(token);
    // console.log(userInfo);
    setIsLoggedIn(true);
    navigate("/");
  };

  const signup = async (username, password, firstName, lastName, email) => {
    const registered = await JoblyApi.signUp(
      username,
      password,
      firstName,
      lastName,
      email
    );
    navigate("/login");
  };

  const signOut = async () => {
    setToken(null);
    setUser(null);
    setIsLoggedIn(false);
    navigate("/");
  };
  // console.log(user);

  return (
    <div>
      <Navigation logged={isLoggedIn} />
      <Routes>
        <Route path="/" element={<p>Welcome to the Jobly app!</p>} />
        <Route path="/login" element={<LoginPage tokenGen={login} />} />
        <Route path="/signup" element={<SignupPage onSignup={signup} />} />
        <Route path="/signout" element={<SignoutPage onSignout={signOut} />} />

        <Route
          path={"/companies"}
          element={<ListEntities data={companies} entity={"companies"} />}
        />
        <Route
          path={"/companies/:handle"}
          element={
            <EntityItem
              data={companies}
              cantFind={"/companies"}
              entity={"companies"}
            />
          }
        />

        <Route
          path="/jobs"
          element={<ListEntities data={jobs} entity={"jobs"} />}
        />
        <Route
          path={"/jobs/:id"}
          element={
            <EntityItem data={jobs} cantFind={"/jobs"} entity={"jobs"} />
          }
        />

        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
