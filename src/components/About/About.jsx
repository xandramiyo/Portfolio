import './About.css'
import { useEffect } from 'react'
import self from '../../images/self.JPG'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About(){

	useEffect(() => {
        AOS.init();
    }, [])

	return (
		<section id="about" className="flex col center animate__animated animate__fadeInUp">
			<h3 data-aos="fade-up">about me</h3>
			<div className="flex center">
				<div className="flex col left" data-aos="fade-right">
					<p>I come from a background in customer service but after almost four years in different customer facing jobs, I felt I needed a career change. With the belief that software engineering would give me the most opportunities to have a career doing work I believe in, I took a chance and quit my job to enroll in <span className="highlight">General Assembly's Software Engineering Immersive.</span> Throughout the course, I found genuine enjoyment from coding, despite how difficult it can often feel. I'm excited for the projects I'll be a part of in the future and look forward to the further development of my skills.</p>
					<p>One day, I hope to develop my own video game! To achieve that, I'm dipping my toes into <span className="highlight">C#</span>, <span className="highlight">blender</span>, and <span className="highlight">pixel art</span>.</p>
					<p>In my free time, I like to play video games, watch actual play D&D, try new restaurants, and snuggle my dog.</p>
				</div>
				<div className="right" data-aos="fade-left">
					<img src={self} className="self"/>
				</div>
			</div>
		</section>
	)
}