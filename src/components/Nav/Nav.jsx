import './Nav.css'
import logo from '../../images/logo.png'

export default function Nav(){
	return (
		<nav className="flex">
			<div className="flex center">
				<a href="#landing">
					<img src={logo} className="nav-logo"/>
				</a>
			</div>
			<div className="flex site-nav">
				<a href="#about">about</a>
				<a href="#skills">skils</a>
				<a href="#projects">projects</a>
				<a href="#contact">contact</a>
			</div>
		</nav>
	)
}