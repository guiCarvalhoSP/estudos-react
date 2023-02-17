import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import ChangeMessageState from './components/ChangeMessageState';
function App() {

  const name = 'Nome';

  function showMessage() {
    console.log('Evento do componente pai');
  }

  const [message, setMessage] = useState('a');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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

      <ExecuteFunction myFunction={showMessage}/>

      <Message msg={message}/>

      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
