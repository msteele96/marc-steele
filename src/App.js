import './App.css';
import Contact from './components/contact';
import Projects from './components/projects';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
  <>
    <div class="NavBar">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
    </div>

    <h1 class="App-header">React App Under Construction</h1>

    <Switch>
      <>
      <Route path="/">
        
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
