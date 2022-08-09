import { Link } from "react-router-dom";

const handleSubmit = (e) => {
  e.preventDefault();

  const travelData = {
    air: JSON.parse(localStorage?.getItem("airplaneData")),
    bus: JSON.parse(localStorage?.getItem("busData")),
    car: JSON.parse(localStorage?.getItem("carData")),
    house: JSON.parse(localStorage?.getItem("houseData")),
    train: JSON.parse(localStorage?.getItem("trainData")),
  };
  console.log(travelData);
};

const IconsNav = () => {
  return (
    <div>
      <div id="icons">
        <Link to="/userdashboardhouse/user-dasboard-house.js" className="pages">
          <i className="fa fa-home iconcolor ifsize2"></i>
        </Link>
        <Link to="/userdashboardcar/user-dasboard-car.js" className="pages">
          <i className="fa fa-car iconcolor ifsize"></i>
        </Link>
        <Link to="/userdashboardbus/user-dashboard-bus.js" className="pages">
          <i className="fa fa-bus iconcolor ifsize"></i>
        </Link>
        <Link
          to="/userdashboardairplane/user-dasboard-airplane.js"
          className="pages"
        >
          <i className="fa fa-plane active iconcolore ifsize2"></i>
        </Link>
        <Link to="/userdashboardtrain/user-dasboard-train.js" className="pages">
          <i className="fa fa-train iconcolor ifsize"></i>
        </Link>
      </div>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
};

export default IconsNav;
