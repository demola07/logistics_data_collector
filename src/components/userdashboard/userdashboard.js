import './userdashboard.css'
import chart from '../images/chart.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function UserDashboard() {
	const [isTenantAdmin, setIsTenantAdmin] = useState(false)

	useEffect(() => {
		setIsTenantAdmin(true)
	}, [])

	return (
		<div className='cover'>
			{isTenantAdmin && (
				<Link to='/admin/admin-login.js' className='btn-container'>
					Admin console
				</Link>
			)}
			<div id='userdash'>
				<form>
					<input type="button">
						<Link to='/userdashboardairplane/user-dasboard-airplane.js' className='userdash-btn'>
						Book a Plane
						</Link>
					</input>
				</form>
			  
				<div id='icons'>
					<i className='fa fa-home fsizeh'></i>
					<i className='fa fa-car fsize'></i>
					<i className='fa fa-bus fsize'></i>
					<i className='fa fa-plane fsize'></i>
					<i className='fa fa-train fsize'></i>
				</div>
				<div id='imgdash'>
					<img src={chart} alt='bar chart' />
					{/*<img src={logo} className="App-logo" alt="logo" />*/}
					<table class="imgdash-table">
						<tr>
							<th>Week</th>
							<th>Air</th>
							<th>Car</th>
							<th>Bus</th>
							<th>Home</th>
							<th>Train</th>
						</tr>
						<tr>
							<td>1</td>
							<td>20</td>
							<td>10</td>
							<td>5</td>
							<td>50</td>
							<td>35</td>
						</tr>
						<tr>
							<td>2</td>
							<td>10</td>
							<td>15</td>
							<td>25</td>
							<td>50</td>
							<td>30</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	)
}

export default UserDashboard
