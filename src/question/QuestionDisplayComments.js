import React from 'react'
// import ReactTimeout from 'react-timeout'

// import QuickPlayVotes from './QuickPlayVotes'

import {
		//  NavLink,
		//  Link,
		//  Redirect,
		// Route,
		// Switch,
		//  useRouteMatch,
		//  useParams
	} from 'react-router-dom'

export default class QuestionDisplayComments extends React.Component{

	render(){

		const blank = <></>

		const comment = this.props.comment ? this.props.comment : blank

		const comment_card =
			<ul>
				<li>
					<h5>{comment.user_name}</h5>
					<p>{comment.comment_text}</p>
				</li>
			</ul>

		return(
			<>
				{ comment_card }
			</>
		)
	}
}
