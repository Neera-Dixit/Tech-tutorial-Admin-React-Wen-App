import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,Redirect} from 'react-router';
import {HomePage} from './components/homePage.js';
import {App} from './components/app.js';
import {Header} from './components/header/header.js';
import {AboutPage} from './components/about/aboutPage.js';
import {AuthorPage} from './components/authors/authorPage.js';
import {ManageAuthorPage} from './components/authors/manageAuthorPage.js';
import {NotFoundPage} from './components/notFoundPage.js';


export default (
			<Route name="App" path="/" component={App}>
				<IndexRoute component={HomePage} />
				<Route path="about"  component={AboutPage}/>
				<Route path="authors"  component={AuthorPage} />
				<Route path="addAuthor"  component={ManageAuthorPage} onEnter={entryHandler} onLeave={exitHandler}/>
				<Redirect from="about-us" to="about"/>
				<Route path="*" component={NotFoundPage}/>
			</Route>
		);


function entryHandler(nextState,replace) {
	//console.log(nextState);
}
 
function exitHandler(nextState, replace) {
 	//console.log(this);
}
	