import React, { Component } from 'react'

import valley from '../../static/valley.jpg'
import writingDesk from '../../static/writing-desk.jpg'
import book from '../../static/logo-book.png'

var AdBox = ({ title, description, href, image }) => {
	return (
		<a className="post-box" href={href} target="_blank">
			<div className="image-wrapper">
				<div className="thumbnail" style={{ background: `url('${image}')` }} />
			</div>
			<section className="description">
				<div className="title">{title}</div>
				<div dangerouslySetInnerHTML={{ __html: description }} />
			</section>
		</a>
	)
}

class SignUp extends Component {
	render() {
		return (
			<div className="post-grid">
				{/* 
								<AdBox
					title="Adventure Writing Guide"
					description="This is the complete list of things you need to figure out to create an adventure and run the game. Learn how to write or prep adventures quickly and efficiently."
					href="/adventure-writing-guide"
					image={book} />
				*/}
				<AdBox
					title="Prompts App"
					description="A large collection of prompts that will help you to write or improvise adventures. Adventure ideas, antagonists, settings, challenges - everything you need!"
					href="/prompts"
					image={book} />
				<AdBox
					title="Adventure Writer's Room"
					description="We are a group of GMs who meet in the discord voice chat, and challenge ourselves to improvise a one-shot adventure in 2 hours. Our goal is to have fun brainstorming ideas in a chill, lighthearted, no-pressure environment. We’re looking for some friendly and creative people to join us! "
					href="/writers-room"
					image={writingDesk} />
				<AdBox
					title="Story Games"
					description="Story games are for people who love improvisation and freeform roleplay. Together we go on imaginary adventures improvised from scratch, with no preparation. We take turns GMing scenes for each other, roleplaying, trying to tell a fun story. Come play with us!"
					href="/story-games"
					image={valley} />
				{/* 
				<AdBox
					title="Mirage"
					description="A social, lighthearted, low-combat, rules-light, storytelling/improv-focused roleplaying game. It's like DnD, but focused on social/creative aspects, without all the math, intricate rules, and the slow combat encounters. Come play with us!"
					href="https://playmirage.io"
					image={valley} />					
				*/}

			</div>
		)
	}
}

export default SignUp
