import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory } from 'react-router';
import {AuthorForm} from './authorForm.js';
import {authorActions} from '../../actions/authorActions.js';
 class ManageAuthorPage extends React.Component{

	constructor(props){
		super(props);
		this.state={
			author:{id:'',firstName:'',lastName:''}
		};
	}

	componentWillMount(){
	}

	setAuthorState(firstName,lastName){
		let author={firstName,lastName};
		authorActions.createAuthor({name:firstName+" "+lastName});
		browserHistory.push('/authors');

	}

	render(){

		return (
			<div>
				<AuthorForm saveData={this.setAuthorState}/>
			</div>
		);
	}
}

export { ManageAuthorPage };