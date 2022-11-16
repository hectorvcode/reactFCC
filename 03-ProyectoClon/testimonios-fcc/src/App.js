import './App.css';
import CardData from './componentes/CardData';
import Testimonio from './componentes/Testimonio';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio details={ CardData }/>
      </div>
    </div>
  );
}

export default App;
