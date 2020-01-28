import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './containers/homePage/homePage';
import ShopPage from './containers/shopPage/shopPage';
import SignInAndSignUp from './containers/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
          <BrowserRouter>
          <Header />
  	    	<Switch>
  	      		<Route exact path="/" component={HomePage} />
  	      		<Route exact path="/shop" component={ShopPage} />
              <Route exact path="/signin" render={()=>
                this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp /> } />
  	    	</Switch>
          </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.userReducer.currentUser
    }
}

export default connect(mapStateToProps)(App);