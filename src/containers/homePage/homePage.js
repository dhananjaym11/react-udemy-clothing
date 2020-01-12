import React from 'react';

import MenuItem from '../../components/menuItem/menuItem';

export default function HomePage() {
 	return (
	 	<div className="homepage">
			<div className="directory-menu">
				<MenuItem title="Hats" subtitle="Shop"/>
				<MenuItem title="Men" subtitle="Shop"/>
			</div>
		</div>
	)
}