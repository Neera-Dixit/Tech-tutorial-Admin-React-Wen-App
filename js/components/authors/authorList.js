import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {authorActions} from '../../actions/authorActions.js';

export class AuthorList extends React.Component{

	constructor(){
		super();
	}

	deleteAuthor(id){
		authorActions.deleteAuthor(id);
	}

	getAuthorData(authors){

		return authors.map((author)=>{
			return (
				<tr key={author.id}>
					<td><a to={`/#authors/${author.id}`}>{author.id}</a></td> 
					<td>{author.name}</td>
					<td><a href="#" onClick={this.deleteAuthor.bind(this,author.id)}>Delete</a></td>
				</tr>
				);
		});
	}

	render(){

		return (
			<div>
				<table className="table">
					<thead>
					   <tr>
						<td>ID</td>
						<td>Author</td>
					   </tr>
					</thead>
					<tbody>
						{this.getAuthorData(this.props.authors)}
					</tbody>
				</table>
			</div>
		);
	}
}
