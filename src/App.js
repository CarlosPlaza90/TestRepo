import './App.css';
import './hojas-de-estilo/Boton.css'
import jojosbanner from './imagenes/jojosbanner.jpg';
import { Boton } from './componentes/Boton';
import { Contador } from './componentes/'
function App() {

  const manejarClick = () => {
    console.log("click");

  }
  
  const reiniciarContador = () => {
    console.log("reiniciar");

  }

  return (
    <div className="App">
      <div className='jojos-banner-contenedor'>
        <img
          className='jojosbanner'
          src={jojosbanner}
          alt='banner de los jojos' />


      </div>
      <div className='contenedor-principal'>
        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={ manejarClick }>
        </Boton>

        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={ reiniciarContador }>
        </Boton>


      </div>

    </div>
  );
}

export default App;
