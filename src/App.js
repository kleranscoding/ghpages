import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const baseURL = process.env.PUBLIC_URL;

function Nav() {
  return (
    <nav style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/random'>Random</Link>
    </nav>
  );
}

const NotFound = () => <h1>Not Found</h1>

function Home() {
  return (
    <>
      <img src={baseURL + "/img/inout.JPG"} style={{ width: "480px", height: "320px" }} alt="in-out" />
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
