import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  let redTitle = true;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />

      <p>Paragrafo do app js</p>

      <h2 className={ redTitle ? 'red-title' : 'title'}>Este titulo vai ter classe dinamica</h2>

      <Title/>
    </div>
  );
}

export default App;
