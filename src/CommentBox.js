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
	}
	//render comments from db
	loadComments(){
		axios.get(this.props.url).then(
			res=>{this.setState({data:res.data});}
		)
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
				<CommentForm/>
				<CommentList data={this.state.data}/>
			</div>
			)
	}
}

export default CommentBox