import React,{ Component } from 'react';
import CommentList from './components/commentlist';
import CommentForm from './components/commentform';
import axios from 'axios';
class CommentBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			data:[]
		};
		this.loadComments = this.loadComments.bind(this);
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
	}
	//render comments from db
	loadComments(){
		axios.get(this.props.url).then(
			res=>{this.setState({data:res.data});}
		)
	}
	//handle comments posted to db
	handleCommentSubmit(comment){
		//define submission
		axios.post(this.props.url,comment).then(res=>{
			this.loadComments();
		}).catch(err=>{
			console.log(err);
		})
	}
	//post comments from db
	componentDidMount(){
		this.loadComments();
		setInterval(this.loadComments,this.props.pollInterval);
	}
	render(){
		return(
			<div>
				<h2>Comments</h2>
				<CommentForm onCommentSubmit = { this.handleCommentSubmit }/>
				<CommentList data={this.state.data}/>
			</div>
			)
	}
}

export default CommentBox