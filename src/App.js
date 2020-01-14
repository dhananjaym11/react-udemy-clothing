import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './containers/homePage/homePage';
import ShopPage from './containers/shopPage/shopPage';
import './App.css';

function App() {
  return (
    <div>
        <BrowserRouter>
	    	<Switch>
	      		<Route exact path="/" component={HomePage} />
	      		<Route exact path="/shop" component={ShopPage} />
	    	</Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
