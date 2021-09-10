import './App.css';
import Contact from './components/contact';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
  <>
    <h1 class="App-header">React App Under Construction</h1>

    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>

    <Switch>
      <>
      <Route path="/">
        
      </Route>

      <Route exact path="/contact">
        <Contact/>
      </Route>

      </>
    </Switch>

  </>
  );
}

export default App;
