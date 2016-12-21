import React from 'react';
import ReactDOM from 'react-dom';
import {Router,hashHistory,browserHistory} from 'react-router';
import Routes from './routes.js';

//js which is included in index.html
ReactDOM.render
	(
	<Router history={browserHistory}>
		{Routes}
	</Router>,
	document.getElementById("app"));