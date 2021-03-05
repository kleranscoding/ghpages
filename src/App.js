import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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

const RandomComp = () => <p> {Math.round(Math.random()*10)} </p>;


function App() {

  return (
    <div className="App">
      <BrowserRouter basename={baseURL}>
        <Nav />

        <div className="App-body">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/random" component={RandomComp} />
          <Route path="/*" />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
