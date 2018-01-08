import React, { Component } from 'react';

class commentform extends Component{
	constructor(props){
		super(props);
		this.state = { author: '', comment : ''};
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleCommentChange = this.handleCommentChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleAuthorChange(e){
		this.setState({author: e.target.value});
	}
	handleCommentChange(e){
		this.setState({comment: e.target.value});
	}
	handleSubmit(e){
		e.preventDefault();
		console.log(`${this.state.author} said "${this.state.comment}"`);
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input 
					type='text'
					placeholder='Your name...'
					value = {this.state.author}
					onChange = { this.handleAuthorChange }
					/>
					<input
					type = 'text'
					placeholder = 'your comment'
					value = {this.state.comment}
					onChange = {this.handleCommentChange}
					/>
					<input
					type = 'submit'
					value = 'Post'
					/>
				</form>
			</div>
			);
	}
}

export default commentform;