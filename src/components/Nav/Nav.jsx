import './Nav.css'
import logo from '../../images/logo.png'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'

export default function Nav(){
	return (
		<nav className="flex">
			<div className="flex center">
				<a href="#landing">
					<img src={logo} className="nav-logo"/>
				</a>
			</div>
			<div className="flex site-nav">
				<a href="#about">About</a>
				<a href="#skills">Skils</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</div>
		</nav>
	)
}