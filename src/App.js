import './App.css';
import Contact from './components/contact';
import Project from './components/project';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
  <>
    <h1 class="App-header">React App Under Construction</h1>

    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/projects">projects</Link>

    <Switch>
      <>
      <Route path="/">
        
      </Route>

      <Route exact path="/contact">
        <Contact/>
      </Route>

      <Route exact path="/projects">
        <Project/>
      </Route>

      </>
    </Switch>

  </>
  );
}

export default App;
