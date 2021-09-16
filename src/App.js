import './App.css';
// import Navbar from 'react-bootstrap/Navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
  <>
    <div class="NavBar">
    {/* <Navbar bg="dark" variant="dark" sticky="top"> */}
      <ul>
        <li><Link to="/" style={{ textDecoration: 'none', color:'white'}}>Home</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none', color:'white'}}>About</Link></li>
        <li><Link to="/projects" style={{ textDecoration: 'none', color:'white'}}>Projects</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none', color:'white'}}>Contact</Link></li>
      </ul>
    {/* </Navbar> */}
    </div>

    {/* <h1 class="App-header">React App Under Construction</h1> */}

    <Switch>
      <>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route exact path="/about">
        <About/>
      </Route>

      <Route exact path="/contact">
        <Contact/>
      </Route>

      <Route exact path="/projects">
        <Projects/>
      </Route>

      </>
    </Switch>

  </>
  );
}

export default App;
