import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import Titulo from './Components/Titulo';
import Subtitulo from './Components/Subtitulo';
import Tablero from './Components/Tablero';
import NuevoJuego from './Components/NuevoJuego';

function Main() {
  return (
    <>
      <div className="container">
        <Titulo />
        <Subtitulo />
        <Tablero />
        {/* <NuevoJuego /> */}
      </div>
    </>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))