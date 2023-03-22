import './Nav.css'
import { useEffect, useRef } from 'react'
import logo from '../../images/logo.png'
import menu from '../../images/menu.png'

export default function Nav(){

	// const hamburger = useRef(null);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 	hamburger.current.classList.toggle("active");
	// 	}, 1000);
	// 	return () => {};
	// });

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
			{/* <div className="flex center hamburger">
				<img src={menu}/> 
			</div> */}
		</nav>
	)
}