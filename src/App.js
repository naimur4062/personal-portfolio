import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About/About';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import BlogsPage from './Pages/BlogsPage/BlogsPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/blogs">
          <BlogsPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
