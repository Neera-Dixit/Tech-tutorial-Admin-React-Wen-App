import React from 'react';
import ReactDOM from 'react-dom';

export class TextInput extends React.Component{
	render(){

		return (
			<div>
			<input type="text" name={this.props.name} className={this.props.className} ref={this.props.refer} placeholder={this.props.placeHolder}/>
			</div>
		);
	}
}