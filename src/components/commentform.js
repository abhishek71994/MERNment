import React, { Component } from 'react';

class commentform extends Component{
	constructor(props){
		super(props);
		this.state = { author: '', text : ''};
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleCommentChange = this.handleCommentChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleAuthorChange(e){
		this.setState({author: e.target.value});
	}
	handleCommentChange(e){
		this.setState({text: e.target.value});
	}
	handleSubmit(e){
		e.preventDefault();
		let author = this.state.author.trim();
		let text = this.state.text.trim();
		if(!text || !author){
			return;
		}
		//console.log("author",author,"text",text);
		this.props.onCommentSubmit({author: author,text:text});
		this.setState({author:"",text:""});
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
					value = {this.state.text}
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