import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import * as actions from '../../redux/actions';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	handleSubmit = () => {
		this.setState ({
			email: '',
			password: ''
		})
		this.props.setCurrentUser();
	}

	render() {
		return (
			<div>
				<h2>SignIn</h2>
				<form>
					<div className="form-group">
						<FormInput label="Email" type="text" onChange={this.handleChange} name="email" value={this.state.email} />
					</div>
					<div className="form-group">
						<FormInput label="Password" type="password" onChange={this.handleChange} name="password" value={this.state.password} />
					</div>
					<div className="btn-container">
						<CustomButton type="button" onClick={this.handleSubmit}>Sign In</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setCurrentUser: () => {
            dispatch(actions.setCurrentUser('Dj'))
        }
    }
}

export default connect(null, mapDispatchToProps)(SignIn);