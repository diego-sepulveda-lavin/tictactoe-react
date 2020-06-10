import React, { useState } from 'react';

import Titulo from './Titulo';
import Tablero from './Tablero';
import NuevoJuego from './NuevoJuego'


const App = () => {

    // datos y funcionalidad de NuevoJuego
    const [datos, setDatos] = useState({
        jugador1: null,
        jugador2: null,
        selectedWeapon: null,
        turno: true
    })

    // captura y agrega value de input a objeto datos
    const handleInputChange = (e) => {
        let data = {
            [e.target.name]: e.target.value
        }
        setDatos(prevState => {
            return { ...prevState, ...data }
        })
    }

    // captura y agrega innerHTML de DIV a objeto datos para definir weapon
    const handleSelectedWeapon = (e) => {
        let data = {
            selectedWeapon: e.target.innerHTML
        }
        setDatos(prevState => {
            return { ...prevState, ...data }
        })
    }

    // renderiza weapon y lo agrega a Valores Tablero
    const handleChangeWeapon = () => {
        let data = {
            selectedWeapon: datos.selectedWeapon === 'X' ? 'O' : 'X',
            turno: !datos.turno
        }
        setDatos(prevState => {
            return { ...prevState, ...data }
        })

    }

    return (
        <>
            <div className="container">
                <Titulo />
                {
                    (datos.jugador1 === null || datos.jugador2 === null || datos.selectedWeapon === null) ?
                        <NuevoJuego handleInputChange={handleInputChange} handleSelectedWeapon={handleSelectedWeapon} />
                        :
                        <Tablero {...datos} handleChangeWeapon={handleChangeWeapon} />
                }

            </div>
        </>
    )
}

export default App;