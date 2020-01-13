import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './containers/homePage/homePage';
import './App.css';

const HatsPage = () => (<div>Hats page</div>)

function App() {
  return (
    <div>
        <BrowserRouter>
	    	<Switch>
	      		<Route exact path="/" component={HomePage} />
	      		<Route exact path="/hats" component={HatsPage} />
	    	</Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
