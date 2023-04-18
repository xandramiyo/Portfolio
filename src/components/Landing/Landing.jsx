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
		<section id="landing" className="flex col">
			<div className="landing flex col">
				<h2>Hi, I'm Alexandra Sumiyoshi</h2>
				<div className="flex typewriter">
					<p>I'm a &nbsp;</p>
					<Typewriter
						options={{
							strings: [
							"software engineer.",
							"dog mom.",
							"tea lover.",
							"bit of a nerd.",
							],
							autoStart: true,
							loop: true,
							pauseFor: 2000,
						}}
					/>
				</div>
			</div>
			<hr />
		</section>
	)
}