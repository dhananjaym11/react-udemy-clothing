import React from 'react';

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
				{this.state.sections.map(({id, ...otherProps}) => (
					<MenuItem key={id} {...otherProps} />
				))}
			</div>
		)
	}
}

export default Directory;