import { Link } from 'react-router-dom'
import './navbar.css'

const handleclick = (e) => {
	e.preventDefault()
	console.log('I will redirect to AWS Cognito')
}

function NavBar() {
	return (
		<div id='topnav'>
			<button onClick={handleclick} to='/signin/signin.js' className='pages'>
				Sign In
			</button>
		</div>
	)
}

export default NavBar
