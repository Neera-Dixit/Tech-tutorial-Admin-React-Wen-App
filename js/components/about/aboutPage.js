import React from 'react';
import ReactDOM from 'react-dom';

export class AboutPage extends React.Component{

	render(){

		return (
			<div>
				<h1>About</h1>
				<p>The App uses following Technologies</p>
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Webpack</li>
						<li>Bootstrap</li>
					</ul>
			</div>
		);
	}
}
