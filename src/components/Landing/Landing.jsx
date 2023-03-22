import './Landing.css'
import { useEffect } from 'react'
import resume from '../../files/resume.pdf'
import AOS from 'aos';	
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect'

export default function Landing() {

	useEffect(() => {
        AOS.init();
    }, [])

	let typewriter = new Typewriter('#typewriter', {
		strings: ['Hello', 'World'],
		autoStart: true,
	  })

	return (
		<section id="landing" className="flex col center">
			<div className="landing flex col center">
				<h2>Alexandra Sumiyoshi</h2>
				<div className="flex typewriter">
					<p>I am a </p>
					<Typewriter
						options={{
							strings: [
							"software engineer.",
							"dog mom.",
							"tryer of many hobbies.",
							"bit of a nerd.",
							],
							autoStart: true,
							loop: true,
							pauseFor: 2000,
						}}
					/>
				</div>
				<div className="landing-links">
					<a href="#contact">contact me</a>
					<a href={resume} target='_blank' rel="noreferrer">resume</a>
				</div>
			</div>
		</section>
	)
}