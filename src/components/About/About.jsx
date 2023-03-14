import './About.css'
import self from '../../images/self.JPG'

export default function About(){
	return (
		<div id="about" className="flex">
			<div className="flex col left">
				<h3>about me</h3>
				<p>I come from a background in customer service but after almost four years in different customer facing jobs, I felt I needed a career change. With the belief that software engineering would give me the most opportunities to have a career doing work I believe in, I took a chance and quit my job to enroll in General Assembly's Software Engineering Immersive. Throughout the course, I found myself developing a passion for app and feature development and a genuine enjoyment in coding, despite how difficult it can often feel.</p>
				<p>In my free time, I like to play video games, watch actual play D&D, try new restaurants, and snuggle my dog.</p>
				<p>One day, I hope to develop my own video game! To achieve that, I'm dipping my toes into C#, blender, and pixel art.</p>
			</div>
			<div className="right">
				<img src={self} className="self"/>
			</div>
		</div>
	)
}