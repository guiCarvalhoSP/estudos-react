import './App.css';

import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
function App() {

  const name = 'Nome';

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      <div>
        <img src="/img1.jpg" alt="Paisagem floresta" />
      </div>

      <div>
        <img src={City} alt="Cidade noturna" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={name} />
    </div>
  );
}

export default App;
