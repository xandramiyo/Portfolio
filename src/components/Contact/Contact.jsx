import './Contact.css'
import { useRef } from 'react'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'
import emailjs from 'emailjs-com'

export default function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_agddv4w', 'template_maub5z9', form.current, 'agiHzzbGo689oPv0u')
        e.target.reset()
    };

	return (
		<section id="contact" className="flex col center">
			<h3>get in touch</h3>
			<div className="flex contact-ctr">
				<div className="left-contact">
					<p>Whether you have an opportunity for me or just want to have a chat, fill out the form and I'll get back to you as soon as I can!</p>
					<div className="flex contact-links">
						<a href="">
							<img src={linkedin} className="project-link"/>
						</a>
						<a href=""> 
							<img src={github} className="project-link"/>
						</a>
					</div>
				</div>
				<form className="flex col right-contact" onSubmit={sendEmail}>
					<input name='name' placeholder="Name"></input>
					<input name='email' placeholder="Email"></input>
					<textarea 
						name='message'
						placeholder="Message"
						rows={5}
					></textarea>
					<button>send</button>
				</form>
			</div>
		</section>
	)
}