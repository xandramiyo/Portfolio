import './Projects.css'
import { useEffect} from 'react'
import github from '../../images/github.png'
import pc from '../../images/monitor.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Projects() {
	
	useEffect(() => {
        AOS.init();
    }, [])
	
	return (
		<section id="projects" className="flex col">
			<h3>Projects</h3>
				<div className="flex carousel">
					<div id="project1" className="project-ctr flex col">
						<div className="project-img-ctr">
							<img src="https://imgur.com/n65ygpg" className="project-img"/>
						</div>
						<div className="project-info flex col">
							<div className="project-header">
								<h5>Money Gone</h5>
								<div className="project-links">
									<a target="_blank" href="https://github.com/xandramiyo/Money-Gone">Github repo</a>
									&nbsp;&nbsp;&nbsp;&nbsp;
									<a target="_blank" href="https://money-gone.herokuapp.com/">Deployed site</a>
								</div>
							</div>
							<p>Track your spending and income. Create, update, and delete purchases or income to increase consciousness of where your money is going.</p>
							<div className="flex project-footer">
								<div>Javascript</div>
								<div>MongoDB</div>
								<div>Mongoose</div>
								<div>Express.js </div>
								<div>React.js</div>
								<div>Node.js</div>
							</div>
						</div>
					</div>
					<div id="project2" className="project-ctr flex col" >
						<div className="project-img-ctr">
							<img src="https://i.imgur.com/QjYk18h.png" className="project-img"/>
						</div>
						<div className="project-info flex col">
							<div className="project-header">
								<h5>Blather</h5>
									<div className="project-links">
										<a target="_blank" href="https://github.com/xandramiyo/Blather">Github repo</a>
										&nbsp;&nbsp;&nbsp;&nbsp;
										<a target="_blank" href="https://blather.herokuapp.com/">Deployed site</a>
									</div>
							</div>
							<p>A blog platform inspired by twitter's thread format. Create threads, add posts to threads, and add comments. </p>
							<div className="flex project-footer">
								<div>Javascript</div>
								<div>MongoDB</div>
								<div>Mongoose</div>
								<div>Express.js</div>
								<div>Node.js</div>
							</div>
						</div>
					</div>
					<div id="project3" className="project-ctr flex col">
						<div className="project-img-ctr">
							<img src="https://i.imgur.com/1fgf98o.png" className="project-img"/>
						</div>
						<div className="flex col project-info ">
							<div className="project-header">
								<h5>Fanbass</h5>
								<div className="project-links">
									<a target="_blank" href="https://github.com/nandobrain/Fanbass">Github repo</a>
									&nbsp;&nbsp;&nbsp;&nbsp;
									<a target="_blank" href="https://fanbass.herokuapp.com/">Deployed site</a>
								</div>
							</div>
							<p>Memorialize all your experiences related to your favorite music artists. Add an artist to your library, add records of your experiences (such as live shows, merch, new releases, and more), and leave comments. </p>
							<div className="flex project-footer">
								<div>Python</div>
								<div>Django</div>
								<div>Postgresql</div>
								<div>AWS S3</div>
							</div>
						</div>
					</div>
				</div>
		</section>
	)
}


/*

<div id="project1" className="project-ctr flex col" data-aos="fade-up">
				<div>
					<img src="https://i.imgur.com/BpK0qhW.png" className="project-img"/>
				</div>
				<div className="project-info flex col">
					<h5>Money Gone</h5>
					<p>Track your spending and income. Create, update, and delete purchases or income to increase consciousness of where your money is going.</p>
					<div className="flex project-footer">
						<div>Javascript</div>
						<div>MongoDB</div>
						<div>Mongoose</div>
						<div>Express.js </div>
						<div>React.js</div>
						<div>Node.js</div>
					</div>
					<div className="project-footer">
						<a target="_blank" href="https://github.com/xandramiyo/Money-Gone">
							<img src={github} className="project-link"/>
						</a>
					</div>
				</div>
			</div>
			<div id="project2" className="project-ctr flex col" data-aos="fade-up">
				<div className="project-img">
					<img src=""/>
				</div>
				<div className="project-info flex col">
					<h5>AC Collector</h5>
					<p>A full CRUD Django application with integration of a third party API around one of my favorite games, Animal Crossing! Add villagers from the API by name, see some important information about the character populate onto their details page, add photos, notes, and keep track of the islands and towns they've been a resident of. </p>
					<div className="flex project-footer">
						<div>Python</div>
						<div>Django</div>
						<div>Postgresql</div>
						<div>RESTful API</div>
						<div>AWS S3</div>
					</div>
					<div className="project-footer">
						<a target="_blank" href="https://github.com/xandramiyo/AC-collection">
							<img src={github} className="project-link"/>
						</a>
					</div>
				</div>
			</div>
			<div id="project3" className="project-ctr flex col" data-aos="fade-up">
				<div>
					<img src="https://i.imgur.com/hbHBUtQ.png" className="project-img"/>
				</div>
				<div className="project-info flex col">
					<h5>Blather</h5>
					<p>A blog platform inspired by twitter's thread format. Create threads, add posts to threads, and add comments. </p>
					<div className="flex project-footer">
						<div>Javascript</div>
						<div>MongoDB</div>
						<div>Mongoose</div>
						<div>Express.js</div>
						<div>Node.js</div>
					</div>
					<div className="project-footer">
						<a target="_blank" href="https://github.com/xandramiyo/Blather">
							<img src={github} className="project-link"/>
						</a>
						<a target="_blank" href="https://blather.herokuapp.com/">
							<img src={pc} className="project-link"/>
						</a>
					</div>
				</div>
			</div>
			<div id="project4" className="project-ctr flex col" data-aos="fade-up">
				<div>
					<img src="https://i.imgur.com/XMNP2Le.png" className="project-img"/>
				</div>
				<div className="project-info flex col">
					<h5>Fanbass</h5>
					<p>Memorialize all your experiences related to your favorite music artists. Add an artist to your library, add records of your experiences (such as live shows, merch, new releases, and more), and leave comments. </p>
					<div className="flex project-footer">
						<div>Python</div>
						<div>Django</div>
						<div>Postgresql</div>
						<div>AWS S3</div>
					</div>
					<div className="project-footer">
						<a target="_blank" href="https://github.com/nandobrain/Fanbass">
							<img src={github} className="project-link"/>
						</a>
						<a target="_blank" href="https://fanbass.herokuapp.com/">
							<img src={pc} className="project-link"/>
						</a>
					</div>
				</div>
			</div>

*/

