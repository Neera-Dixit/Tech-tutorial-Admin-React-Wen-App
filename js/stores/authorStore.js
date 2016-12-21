import Dispatcher from '../dispatcher/appDispatcher.js';
import ActionTypes from '../constants/actionTypes.js';
import {EventEmitter} from 'events';

class AuthorStore extends EventEmitter{
	constructor(){
		super();
		this.getAuthors=this.getAuthors.bind(this);
		this.deleteAuthor=this.deleteAuthor.bind(this);
		this.state={authors:[{id:1,name:"Neeraj dixit"},{id:2,name:"Naveen dixit"}]};
	}

	getAuthors(){
		return this.state.authors;
	}

	createAuthor(author){
		this.state.authors.push({id:this.state.authors.length+1,name:author.name});
		this.emit("change");
	}

	deleteAuthor(id){
		this.state.authors=this.state.authors.filter((auth)=>{
			if(auth.id!==parseInt(id)){
				return true;
			}
			else{
				return false;
			}
		});
		this.emit("change");
	}

	authorActionListener(action){
		switch(action.actionType){
			case "CREATE_AUTHOR":{
				this.createAuthor(action.author);
			}
			case "DELETE_AUTHOR":{
				this.deleteAuthor(action.id);
			}
		}
	}

}

const authStore=new AuthorStore();
Dispatcher.register(authStore.authorActionListener.bind(authStore));
export {authStore};