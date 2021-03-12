import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Gallery from "./Components/Gallery/";
import './stylesheets/App.css';

const baseURL = process.env.PUBLIC_URL;

const Nav = () => (
  <nav style={{ backgroundColor: "rgba(29, 29, 29, 0.9)", zIndex: 10000, height: "75px", position: "fixed", width: "100%", marginBottom: "75px", top: 0, left: 0, display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
    <Link style={{color: "#ffffff"}} to='/'>Home</Link>
    <Link style={{color: "#ffffff"}} to='/about'>About</Link>
    <Link style={{color: "#ffffff"}} to='/gallery'>Gallery</Link>
    <Link style={{color: "#ffffff"}} to='/random'>Random</Link>
  </nav>
);

const Home = () => (
  <React.Fragment>
    <img src={baseURL + "/img/inout.JPG"} style={{ width: "50%", height: "50%" }} alt="in-out" />
    <p> {baseURL} </p>
    <a className="App-link" href={baseURL + "/"} target="_blank" rel="noopener noreferrer">
      React GH-pages
    </a>
  </React.Fragment>
);

const Footer = () => (
  <footer style={{width: "100%", marginTop: "20px", borderTop: "1px solid #61dafb", fontSize: "6pt"}}>
    <p> &copy; 2021 kleranscoding </p>
  </footer>
);

const About = () => <div className="about-body-container" style={{flexGrow: 1}}><h3> About... </h3></div>;

const RandomComp = () => (
  <div className="random-body-container" style={{flexGrow: 1}}> 
    <h3> Your lucky number: </h3>
    <p> {Math.round(Math.random() * 100)} </p>  
  </div>
);

const NotFound = () => <h1>Not Found</h1>;

const App = () => {

  return (
    <div className="App">
      <BrowserRouter basename={baseURL}>
        <Nav />
        <div className="App-body">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/random" component={RandomComp} />
            <Route path="/gallery" component={Gallery} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
