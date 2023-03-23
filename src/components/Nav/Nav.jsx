import './Nav.css'
import { useEffect, useRef } from 'react'
import logo from '../../images/logo.png'
import menu from '../../images/menu.png'

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
			<div className="flex center">
				<a href="#landing">
					<img src={logo} className="nav-logo"/>
				</a>
			</div>
			<div className="flex site-nav" /*ref={hamburger} */>
				<a href="#about">about</a>
				<a href="#skills">skills</a>
				<a href="#projects">projects</a>
				<a href="#contact">contact</a>
			</div>
			<div className="flex center hamburger">
				<img src={menu}/> 
			</div>
		</nav>
	)
}