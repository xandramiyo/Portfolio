import './App.css';
import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="flex App">
      <Nav />
      <main className="flex col center">
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
