import { computeHeadingLevel } from '@testing-library/react';
import './App.css';
import Home from './components/Home.js';
import Resume from './components/resume.js'

function App() {
  /*
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi there!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  
      </header>
      <NavBar></NavBar>
      <Body className="Body"></Body>
    </div>
  );
  */
 return (
   <div textAlign="center">     
     <Home></Home>
     <Resume></Resume>
   </div>
 )
}

export default App;
