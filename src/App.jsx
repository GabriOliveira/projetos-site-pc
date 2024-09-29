import './App.css';
import Inicio from './components/Inicio';
import Nossosservicos from './components/Nossosservicos';
import Quemsomos from './components/Quemsomos';
function App() {
  return (
    <div className='container-principal'>
      <Inicio />
      <Nossosservicos />  
      <Quemsomos />
    </div>
  );
}

export default App;
