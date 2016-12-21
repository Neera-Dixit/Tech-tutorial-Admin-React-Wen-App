import React from 'react';
import ReactDOM from 'react-dom';
import {Link,IndexLink} from 'react-router';

export class Header extends React.Component{

	render(){

		let styleObj={
			height:100
		}

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid" style={styleObj}>
				  <Link to="/" className="navbar-brand">
				  	<img src="images/react.png" width="60" height="50" />
				  </Link>
				  <ul className="nav navbar-nav">
				  	<li><IndexLink to="/"><span>Home</span></IndexLink></li>
				  	<li><Link to="about"><span>About</span></Link></li>
				  	<li><Link to="authors"><span>Authors</span></Link></li>
				  </ul>
				</div>
			</nav>
		);
	}
}
