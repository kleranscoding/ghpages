import './stylesheets/App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const baseURL = process.env.PUBLIC_URL;

function Nav() {
  return (
    <nav style={{ backgroundColor: "#1c1c1c", height: "75px", position: "fixed", width: "100%", marginBottom: "75px", top: 0, left: 0, display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
      <Link style={{color: "#ffffff"}} to='/'>Home</Link>
      <Link style={{color: "#ffffff"}} to='/about'>About</Link>
      <Link style={{color: "#ffffff"}} to='/random'>Random</Link>
    </nav>
  );
}

const NotFound = () => <h1>Not Found</h1>

function Home() {
  return (
    <>
      <img src={baseURL + "/img/inout.JPG"} style={{ width: "50%", height: "50%" }} alt="in-out" />
      <p> {baseURL} </p>
      <a className="App-link" href={baseURL + "/"} target="_blank" rel="noopener noreferrer">
        React GH-pages
      </a>
    </>
  );
}

const About = () => <h3> About me </h3>;

const RandomComp = () => <React.Fragment> <h3> Your lucky number: <p> {Math.round(Math.random() * 100)} </p> </h3> </React.Fragment>;


function App() {

  return (
    <div className="App">
      <BrowserRouter basename={baseURL}>
        <Nav />

        <div className="App-body">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/random" component={RandomComp} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
