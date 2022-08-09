import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconsNav from "../IconNav";
import "./userdashboard-airplane.css";


function AirplaneDashboard() {
	const navigate = useNavigate()
	const [airplaneData, setAirplaneData] = useState({})

	useEffect(() => {
		const airplaneData = JSON.parse(localStorage?.getItem('airplaneData'))
		console.log('td', airplaneData)
		if (airplaneData) {
			setAirplaneData(airplaneData)
		}
	}, [])

	function handleSubmit(event) {
		event.preventDefault()
		localStorage.setItem('airplaneData', JSON.stringify(airplaneData))
	}

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setAirplaneData((values) => ({ ...values, [name]: value }));
    localStorage.setItem("airplaneData", JSON.stringify({ [name]: value }));
  }
  return (
    <div id="userplanedash">
      <IconsNav />

      <div id="datareg">
        {/* <pre>{JSON.stringify(airplaneData, null, 2)}</pre> */}
        <form action="" onSubmit={handleSubmit} id="powerdata">
          <div className="details"></div>

          <div className="details">
            <label htmlFor="duration" className="">
              Duration of Flight
            </label>
            &nbsp;
            <input
              type="number"
              name="duration"
              value={airplaneData.duration || ""}
              onChange={handleChange}
              className="form-input"
            />
            &nbsp;
            <label htmlFor="gas" className="" name="duration">
              Hrs
            </label>
            <br></br>
          </div>
          {/* 
          <div id="btn">
            <button type="reset" id="reset"></button>
            <button type="submit" id="calc" onClick={(e) => handleSubmit(e)}>
              <Link to="/userdashboardbus/user-dashboard-bus.js">Next</Link>
            </button>
          </div> */}
        </form>
      </div>

			<div id='winclose'>
				<button type='submit' name='close' id='btnclose'>
					<i className='fa fa-times-circle-o'></i>
				</button>
			</div>
		</div>
	)
}

export default AirplaneDashboard
