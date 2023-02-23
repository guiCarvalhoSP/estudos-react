import './App.css';
import MyComponent from './components/MyComponent';

function App() {

  let redTitle = true;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />

      <p>Paragrafo do app js</p>

      <h2 className={ redTitle ? 'red-title' : 'title'}>Este titulo vai ter classe dinamica</h2>
    </div>
  );
}

export default App;
