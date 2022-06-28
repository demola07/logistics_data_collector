import "./userdashboard.css";
import chart from "../images/chart.png";
import { useState } from "react";
import { useEffect } from "react";

function UserDashboard() {
  const [isTenantAdmin, setIsTenantAdmin] = useState(false);

  useEffect(() => {
    setIsTenantAdmin(true);
  }, []);

  return (
    <div className="cover">
      {isTenantAdmin && (
        <div className="btn-container">
          <button>Admin console</button>
        </div>
      )}
      <div id="userdash">
        <div id="icons">
          <i className="fa fa-home fsizeh"></i>
          <i className="fa fa-car fsize"></i>
          <i className="fa fa-bus fsize"></i>
          <i className="fa fa-plane fsize"></i>
          <i className="fa fa-train fsize"></i>
        </div>
        <div id="imgdash">
          <img src={chart} alt="bar chart" />
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
