import './Projects.css'
import github from '../../images/github.png'
import pc from '../../images/monitor.png'

export default function Projects() {
	return (
		<section id="projects" className="flex col center">
			<h3>featured projects</h3>
			<div id="project1" className="project-ctr flex col">
				<div className="project-img">
					<img src="https://i.imgur.com/BpK0qhW.png"/>
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
			<div id="project2" className="project-ctr flex col">
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
			<div id="project3" className="project-ctr flex col">
				<div className="project-img">
					<img src="https://i.imgur.com/hbHBUtQ.png"/>
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
			<div id="project4" className="project-ctr flex col">
				<div className="project-img">
					<img src="https://i.imgur.com/XMNP2Le.png"/>
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
		</section>
	)
}