import './About.css'
import self from '../../images/self.JPG'

export default function About(){

	return (
		<section id="about">
			<div className="flex about">
				<div className="flex col left">
					<h3>About</h3>
					<p>My professional background extends across a variety of customer facing roles. In 2022 I decided I wanted to expand my skillset to include coding and enrolled in <span className="highlight"> General Assembly's Software Engineering Immersive</span>. With a number of projects under my belt from my time with General Assembly, I am contintuing to work on personal projects to maintain my skills. I am available for freelance development work and look forward to opportunities to bring ideas to life. </p>
					
					<p>In my free time I enjoy playing video games, watching actual play D&D, trying new restaurants, and spending time with my dog.</p>
				</div>
				<div className="flex right">
					<img src={self} className="self"/>
				</div>
			</div>
		</section>
	)
}