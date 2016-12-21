import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {AuthorList} from './authorList.js';
import {ManageAuthorPage} from './manageAuthorPage.js';
import {authStore} from '../../stores/authorStore.js';
import {authorActions} from '../../actions/authorActions.js';

 export class AuthorPage extends React.Component{

	constructor(){
		super();
		this.state={authors:authStore.getAuthors()};
		this.updateAuthors=this.updateAuthors.bind(this);
	}

	componentWillMount(){	
		authStore.on("change",this.updateAuthors);		
	}


	updateAuthors(){
		this.setState({authors:authStore.getAuthors()});
	}

	componentWillUnmount(){
		authStore.removeListener("change",this.updateAuthors)
	}


	render(){

		return (
			<div>
				<h1>Authors</h1>
				<Link to="/addAuthor" className="btn btn-default">Add Author</Link>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	}
}

