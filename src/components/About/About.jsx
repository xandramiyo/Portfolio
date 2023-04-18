import './About.css'
import self from '../../images/self.JPG'

export default function About(){

	return (
		<section id="about">
			<div className="flex about">
				<div className="flex col left">
					<h3>About</h3>
					<p>I come from a background in customer service but after almost four years in various customer facing jobs, I decided to pursue a career change. With the belief that software engineering aligns with my passions and would afford me greater opportunities, I took a chance and enrolled in <span className="highlight">General Assembly's Software Engineering Immersive.</span> Despite the challenges, I discovered a genuine enjoyment in coding during the course. I'm excited for the projects I'll be a part of in the future and look forward to the further development of my skills.</p>
					<p>One day, I hope to develop my own video game! To achieve that, I'm currently exploring <span className="highlight">C#</span>, <span className="highlight">blender</span>, and <span className="highlight">pixel art</span>.</p>
					<p>In my free time, I enjoy playing video games, watching actual play D&D, trying new restaurants, and spending time with my dog.</p>
				</div>
				<div className="flex right">
					<img src={self} className="self"/>
				</div>
			</div>
		</section>
	)
}