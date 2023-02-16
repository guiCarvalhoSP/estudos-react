import './App.css';

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
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
      <CarDetails brand='Marca' km={1000} color='Preto'/>

      <Container value="value"><p>Conteudo</p></Container>
    </div>
  );
}

export default App;
