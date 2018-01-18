import React, { Component } from 'react';
import Comment from './comment';

class CommentList extends Component{
	render(){
		let commentNodes = this.props.data.map(comment => {
			return(
				<Comment author={comment.author} key={comment._id}>
					{comment.text}
				</Comment>
				);
		});
		return(
			<div>
				{commentNodes}
			</div>
			);
	}
}

export default CommentList;