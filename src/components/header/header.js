import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown';

class Header extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      showCartdown: false
	    }
	}

	toggleCartDropdown = () => {
		this.setState(prev => ({
			showCartdown: !prev.showCartdown
		}))
	}

	render() {
		const cartItems = this.props.cartItems;
		const cartItemLength = this.props.cartItems ? this.props.cartItems.length : 0;
		return (
			<div className="header">
				<Link to="/">Logo</Link>
				<div style={{float: 'right'}}>
					<Link to="/shop">Shop&nbsp;</Link>
					<Link to="/">Contact&nbsp;</Link>
					<div className="cart-dropdown-parent" >
						<div onClick={this.toggleCartDropdown}>Cart <span>{cartItemLength}</span></div>

						<CartDropdown showCartdown={this.state.showCartdown} cartItems={cartItems} />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems
    }
}

export default connect(mapStateToProps)(Header);