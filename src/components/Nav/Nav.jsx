import './Nav.css'
import { useEffect, useRef } from 'react'
import logo from '../../images/logo.png'
import menu from '../../images/menu.png'
import resume from '../../files/resume.pdf'

export default function Nav(){

	useEffect(() => {
		let navUl = document.querySelector('.site-nav')
		let hamburger = document.querySelector('.hamburger')

		hamburger.addEventListener('click', () => {
			navUl.classList.toggle('active')
		})

		let navLinks = document.querySelectorAll('.site-nav a')
		navLinks.forEach((link) => {
			link.addEventListener('click', () => {
				navUl.classList.remove('active')
			})
		})

	}, [])

	return (
		<nav className="flex">
			<div className="flex">
				<a href="#landing">
					<img src={logo} className="nav-logo" alt=""/>
				</a>
			</div>
			<div className="flex col site-nav" /*ref={hamburger} */>
				<a href="#about">ABOUT</a>
				<a href="#skills">SKILLS</a>
				<a href="#projects">PROJECTS</a>
				<a href="#contact">CONTACT</a>
				{/* <a target="_blank" href={resume} rel="noreferrer">RESUME</a>  */}
			</div>
			<div className="flex center hamburger">
				<img src={menu} alt="navigation menu"/> 
			</div>
		</nav>
	)
}


