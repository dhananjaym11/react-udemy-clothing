import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
	return (
		<div className="header">
			<Link to="/">Logo</Link>
			<div style={{float: 'right'}}>
				<Link to="/shop">Shop&nbsp;</Link>
				<Link to="/">Contact</Link>
			</div>
		</div>
	)
}

export default Header;