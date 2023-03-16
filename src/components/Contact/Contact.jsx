import './Contact.css'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'

export default function Contact() {
	return (
		<section id="contact" className="flex col center">
			<h3>Get in touch</h3>
			<div className="flex">
				<div className="left-contact">
					<p>Whether you have an opportunity for me or just want to have a chat, fill out the form and I'll get back to you as soon as I can!</p>
					<div className="contact-links">
						<a href="">
							<img src={linkedin} className="project-link"/>
						</a>
						<a href=""> 
							<img src={github} className="project-link"/>
						</a>
					</div>
				</div>
				<form className="flex col right-contact">
					<input placeholder="Name"></input>
					<input placeholder="Email"></input>
					<textarea 
						placeholder="Message"
						rows={5}
					></textarea>
					<button>send</button>
				</form>
			</div>
		</section>
	)
}