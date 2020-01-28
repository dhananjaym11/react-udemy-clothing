import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menuItem/menuItem';

class Directory extends React.Component {
	constructor() {
		super();
		this.state = { 
			sections : [
				{
					id: 1,
					title: 'Men',
					url: 'men',
				},
				{
					id: 2,
					title: 'Women',
					url: 'women',
				},
				{
					id: 3,
					title: 'Children',
					url: 'children',
				},
			]
		}
	}

	render() {
		return (
			<div className="directory-menu">
				{ this.props.currentUser ? 
				<h1>Hello {this.props.currentUser} </h1> : null }
				{this.state.sections.map(({id, ...otherProps}) => (
					<MenuItem key={id} {...otherProps} />
				))}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.userReducer.currentUser
    }
}

export default connect(mapStateToProps)(Directory);