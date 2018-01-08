import React,{ Component } from 'react';
import CommentList from './components/commentlist';
import CommentForm from './components/commentform';
import Data from './data';
class CommentBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			data:[]
		};
	}
	render(){
		return(
			<div>
				<h2>Comments</h2>
				<CommentForm/>
				<CommentList data={Data}/>
			</div>
			)
	}
}

export default CommentBox