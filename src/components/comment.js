import React,{ Component } from 'react';
import Marked from 'marked';

class Comment extends Component{
	rawMarkUp(){
		let rawMark = Marked(this.props.children.toString());
		return{__html:rawMark};
	}
	render(){
		return(
			<div>
				<h3>{this.props.author}</h3>
				<span dangerouslySetInnerHTML={ this.rawMarkUp() } />
			</div>
			);
	}
}

export default Comment;