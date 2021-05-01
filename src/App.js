import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/home">
            <Home/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/blogs">
            <Blogs/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
