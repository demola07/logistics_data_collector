import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("loggedIn");
  console.log(loggedIn);

  const handleclick = (e) => {
    e.preventDefault();
    console.log("I will redirect to AWS Cognito");
    localStorage.setItem("loggedIn", true);
    navigate("/userdashboard/user-dashboard.js?id=");
  };

  function handleSignout(e) {
    e.preventDefault();
    console.log("signed out");
    localStorage.removeItem("loggedIn");
  }

  return (
    <div id="topnav">
      {loggedIn ? (
        <button onClick={(e) => handleSignout(e)} className="pages">
          Sign Out
        </button>
      ) : (
        <button
          onClick={(e) => handleclick(e)}
          to="/signin/signin.js"
          className="pages"
        >
          Sign In
        </button>
      )}
    </div>
  );
}

export default NavBar;
