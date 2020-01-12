import React from 'react';

import MenuItem from '../menuItem/menuItem';

class Directory extends React.Component {
	constructor() {
		super();
		this.state = { 
			sections : [
				{
					id: 1,
					title: 'Men'
				},
				{
					id: 2,
					title: 'Women'
				},
				{
					id: 3,
					title: 'Children'
				},
			]
		}
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(section => (
					<MenuItem key={section.id} title={section.title} />
				))}
			</div>
		)
	}
}

export default Directory;