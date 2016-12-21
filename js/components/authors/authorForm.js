import React from 'react';
import ReactDOM from 'react-dom';
import {TextInput} from '../webcomponents/textInput.js';

 export class AuthorForm extends React.Component{

	constructor(){
		super();
	}

	saveData(){
		let fnValue=this.fn.value;
		let lnValue=this.ln.value;
		this.props.saveData(fnValue,lnValue);
	}

	render(){

		return (
			<div>
			  <form>
				<h1>Manage Authors</h1>
				<label>First Name</label>
				<TextInput name="firstName" className="form-control"  refer={(input)=>this.fn=input} placeHolder="First Name" />

				<br/>	
				<label>Last Name</label>
				<TextInput name="lastName" className="form-control" refer={(input)=>this.ln=input} placeHolder="Last Name"/>
				<input type="button" onClick={()=>this.saveData()} value="Save" className="btn btn-default" />
			  </form> 
			</div>
		);
	}
}






