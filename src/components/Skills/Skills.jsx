import './Skills.css'
import { useEffect} from 'react'
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
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Skills() {
	
	useEffect(() => {
        AOS.init();
    }, [])

	return (
		<section id="skills" className= "flex col center">
			{/* <h3 data-aos="fade-up">skills</h3>
			<div className="flex center skill-ctr">
				<img src={js} alt="Javascript" className="logo" data-aos="flip-left"/>
				<img src={html} alt="HTML" className="logo" data-aos="flip-left"/>
				<img src={css} alt="CSS" className="logo" data-aos="flip-left"/>
				<img src={nodejs} alt="Node.js" className="logo" data-aos="flip-left"/>
				<img src={mongoDB} alt="Mongo DB" className="logo" data-aos="flip-left"/>
				<img src={mongoose} alt="Mongoose" className="logo" data-aos="flip-left"/>
				<img src={express} alt="Express Framework" className="logo" data-aos="flip-left"/>
				<img src={python} alt="Python 3" className="logo" data-aos="flip-left"/>
				<img src={django} alt="Django Framework" className="logo" data-aos="flip-left"/>
				<img src={postgresql} alt="Postgresql" className="logo" data-aos="flip-left"/>
				<img src={react} alt="React.js library" className="logo" data-aos="flip-left"/>
				<img src={github} alt="Github Version Control" className="logo" data-aos="flip-left"/> */}
			{/* </div> */}
		</section>
	)
}