import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolios from './components/Portfolios/Portfolios';
import Contact from './components/Contact/Contact';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <HomePage/>
        </Route>
        <Route path="/home">
            <HomePage/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/resume">
            <Resume/>
        </Route>
        <Route path="/portfolios">
            <Portfolios/>
        </Route>
        <Route path="/blogs">
            <Blogs/>
        </Route>
        <Route path="/contact">
            <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
