import './App.css';
import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="flex App">
      <Nav />
      <main className="flex col">
        <Landing />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
