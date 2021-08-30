import "./App.css";
import Header from "./Components/NavBar/Header";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/LandingPage/Landing";
import Projects from "./Components/Projects Page/Projects";
import About from "./Components/About Me Page/About";
import Contact from "./Components/Contact Me Page/Contact";
import Footer from "./Components/Footer/Footer";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize("284514275");
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Landing />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
