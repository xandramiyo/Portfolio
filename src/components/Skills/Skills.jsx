import './Skills.css'
import js from '../../images/js.png'
import html from '../../images/html.png'
import css from '../../images/css.png'
import nodejs from '../../images/nodejs.png'
import express from '../../images/express.png'
import mongoDB from '../../images/mongoDB.png'
import mongoose from '../../images/mongoose.png'
import python from '../../images/python.png'
import django from '../../images/django.png'
import postgresql from '../../images/postgresql.png'
import react from '../../images/react.png'
import github from '../../images/github.png'


export default function Skills() {
	return (
		<section id="skills" className= "flex col center">
			<h3>skills</h3>
			<div className="flex center skill-ctr">
				<img src={js} alt="Javascript" className="logo" data-content="Javascript"/>
				<img src={html} alt="HTML" className="logo" />
				<img src={css} alt="CSS" className="logo" />
				<img src={nodejs} alt="Node.js" className="logo" />
				<img src={mongoDB} alt="Mongo DB" className="logo" />
				<img src={mongoose} alt="Mongoose" className="logo" />
				<img src={express} alt="Express Framework" className="logo" />
				<img src={python} alt="Python 3" className="logo" />
				<img src={django} alt="Django Framework" className="logo" />
				<img src={postgresql} alt="Postgresql" className="logo" />
				<img src={react} alt="React.js library" className="logo" />
				<img src={github} alt="Github Version Control" className="logo" />
			</div>
		</section>
	)
}