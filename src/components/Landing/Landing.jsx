import './Landing.css'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Landing() {

	useEffect(() => {
        AOS.init();
    }, [])

	return (
		<section id="landing" className="flex col center">
			<div className="landing">
				<h2>Alexandra Sumiyoshi</h2>
				<p>Hello! I'm a full-stack software engineer with a passion for app development.</p>
			</div>
		</section>
	)
}