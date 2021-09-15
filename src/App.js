import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
  <>
    <div class="NavBar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

    <h1 class="App-header">React App Under Construction</h1>

    <Switch>
      <>
      <Route path="/">
        
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
