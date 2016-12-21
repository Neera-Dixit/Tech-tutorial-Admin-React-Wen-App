import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './header/header.js';
import {RouteHandler} from 'react-router';

//main.js invokes App which displays Header and children
export class App extends React.Component{

	render(){

		return (
			<div>
				<Header/>
				<div className="fluid-container">
					{this.props.children}
				</div>
			</div>
		);
	}
}

