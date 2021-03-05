import './App.css';

const baseURL = process.env.PUBLIC_URL;

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={baseURL+"/img/inout.JPG"} style={{width:"480px", height:"320px"}} alt="in-out"/>
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {baseURL }
        </p>
        <a
          className="App-link"
          href={baseURL+"/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          React GH-pages
        </a>
      </header>
    </div>
  );
}

export default App;
