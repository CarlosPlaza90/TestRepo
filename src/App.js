import './App.css';
import './hojas-de-estilo/Boton.css'
import jojosbanner from './imagenes/jojosbanner.jpg';
import { Boton } from './componentes/Boton';
import { Contador } from './componentes/Contador'
import { useState } from 'react';
function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
    

  };
  
  const reiniciarContador = () => {
    setNumClicks(0);

  };

  return (
    <div className="App">
      <div className='jojos-banner-contenedor'>
        <img
          className='jojosbanner'
          src={jojosbanner}
          alt='banner de los jojos' />


      </div>
      <div className='contenedor-principal'>
        <Contador numClicks = {numClicks}  />
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
