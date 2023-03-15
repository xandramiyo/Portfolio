import './Contact.css'

export default function Contact() {
	return (
		<section id="contact" className="flex col center">
			<h3>Get in touch</h3>
			<p>Whether you have an opportunity for me or just want to have a chat, fill out the form below and I'll get back to you as soon as I can!</p>
			<form className="flex col">
				<label>Name</label>
				<input></input>
				<label>Email</label>
				<input></input>
				<label>Message</label>
				<textarea></textarea>
				<button>send</button>
			</form>
		</section>
	)
}