import Dispatcher from '../dispatcher/appDispatcher.js';
import {ActionTypes} from '../constants/actionTypes.js';

var authorActions={
    //Action to create New Author
	createAuthor:function(author){
		let newAuthor={id:author.id,name:author.name};
		Dispatcher.dispatch({
			actionType:ActionTypes.CREATE_AUTHOR,
			author:newAuthor 
		});
	},
	//Action to delete Author
	deleteAuthor:function(id){
		Dispatcher.dispatch({
			actionType:ActionTypes.DELETE_AUTHOR,
			id
		});
	}

};

export {authorActions};