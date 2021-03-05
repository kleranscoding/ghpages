import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/img/inout.JPG" style={{width:"480px", height:"320px"}} alt="in-out"/>
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {process.env.PUBLIC_URL}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
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
