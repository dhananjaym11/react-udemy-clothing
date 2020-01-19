import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './containers/homePage/homePage';
import ShopPage from './containers/shopPage/shopPage';
import SignInAndSignUp from './containers/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header'
import './App.css';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Header />
	    	<Switch>
	      		<Route exact path="/" component={HomePage} />
	      		<Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInAndSignUp} />
	    	</Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
