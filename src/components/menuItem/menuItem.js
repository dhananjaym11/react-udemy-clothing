import React from 'react';
import {withRouter} from 'react-router-dom';

function MenuItem(props) {
 	return (
		<div className="menu-item" onClick={()=>props.history.push('/hats')}>
			<div className="content">
				<h1 className="title">{props.title}</h1>
				<span className="subtitle">Shop Now</span>
			</div>
		</div>
	)
}

export default withRouter(MenuItem);