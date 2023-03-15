import './Nav.css'
import logo from '../../images/logo.png'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'

export default function Nav(){
	return (
		<nav className="flex">
			<div className="flex center">
				<img src={logo} className="nav-logo"/>
			</div>
			<div className="flex site-nav">
				<a href="#home">About</a>
				<a href="#skills">Skils</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</div>
			{/* <div className="flex ext-links">
				<a target="_blank" href="https://www.linkedin.com/in/alexandra-sumiyoshi/">
					<img src={linkedin} className="nav-logo" />
				</a>
				<a target="_blank" href="https://github.com/xandramiyo">
					<img src={github} className="nav-logo" />
				</a>
			</div> */}
		</nav>
	)
}